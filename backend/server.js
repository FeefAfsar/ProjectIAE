const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// --- KONEKSI DATABASE 1 (Finance Analytics) ---
const dbFinance = mysql.createConnection({
    host: 'localhost', 
    user: 'root', 
    password: '', 
    database: 'db_finance_analytics'
});

// --- KONEKSI DATABASE 2 (Core Wallet) ---
const dbWallet = mysql.createConnection({
    host: 'localhost', 
    user: 'root', 
    password: '', 
    database: 'db_core_wallet'
});

// Cek Koneksi
dbFinance.connect(err => { if(!err) console.log('Connected to db_finance_analytics'); });
dbWallet.connect(err => { if(!err) console.log('Connected to db_core_wallet'); });

// --- ROUTES DATABASE 2: CORE WALLET (Saldo, Transfer, Riwayat, Notif) ---

// Get Saldo Aktif dari db_core_wallet
app.get('/api/saldo', (req, res) => {
    dbWallet.query("SELECT saldo_aktif FROM wallet WHERE id = 1", (err, results) => {
        if (err) return res.status(500).json(err);
        res.json({ saldo: results[0].saldo_aktif });
    });
});

// Proses Transfer
app.post('/api/transfer', (req, res) => {
    const { tujuan, nominal } = req.body;
    const amount = parseInt(nominal);

    if (!tujuan || isNaN(amount)) {
        return res.status(400).json({ message: "Data tujuan atau nominal tidak valid" });
    }

    dbWallet.query("SELECT saldo_aktif FROM wallet WHERE id = 1", (err, results) => {
        if (err) return res.status(500).json({ error: "Gagal cek saldo" });
        
        const currentSaldo = results[0].saldo_aktif;

        if (currentSaldo >= amount) {
            // 1. Potong Saldo
            dbWallet.query("UPDATE wallet SET saldo_aktif = saldo_aktif - ? WHERE id = 1", [amount], (err) => {
                if (err) console.error("Gagal potong saldo");
            });

            // 2. Catat Riwayat
            dbWallet.query("INSERT INTO transaksi (tipe, judul, nominal) VALUES ('T', ?, ?)", 
                [`Transfer ke ${tujuan}`, -amount], (err) => {
                if (err) console.error("Gagal catat riwayat");
            });

            // 3. Tambah Notifikasi
            dbWallet.query("INSERT INTO notifikasi (judul, pesan) VALUES (?, ?)", 
                ["Transfer Berhasil ✅", `Berhasil kirim Rp ${amount.toLocaleString()} ke ${tujuan}`], (err) => {
                if (err) console.error("Gagal buat notifikasi");
            });

            res.json({ message: "Transfer Berhasil" });
        } else {
            res.status(400).json({ message: "Saldo tidak cukup" });
        }
    });
});

// Ambil Riwayat Transaksi
app.get('/api/riwayat', (req, res) => {
    dbWallet.query("SELECT * FROM transaksi ORDER BY tanggal DESC", (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
});

// Ambil Notifikasi
app.get('/api/notifikasi', (req, res) => {
    dbWallet.query("SELECT * FROM notifikasi ORDER BY tanggal DESC", (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
});


// --- ROUTES DATABASE 1: FINANCE ANALYTICS (Budget & Savings) ---

app.get('/api/budget', (req, res) => {
    const sql = "SELECT id, kategori, terpakai, limit_budget AS total FROM perencanaan_keuangan";
    dbFinance.query(sql, (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
});

app.get('/api/savings', (req, res) => {
    const sql = "SELECT id, nama, terkumpul, target FROM tabungan";
    dbFinance.query(sql, (err, results) => {
        if (err) return res.json([{ id: 1, nama: 'Beli Laptop Baru', terkumpul: 1000000, target: 5000000 }]);
        res.json(results);
    });
});

// Route Update Tabungan (Sudah terintegrasi dengan Riwayat & Notifikasi)
app.patch('/api/savings/:id', (req, res) => {
    const { id } = req.params;
    const { tambahan } = req.body;
    const nominal = parseInt(tambahan);

    dbWallet.query("SELECT saldo_aktif FROM wallet WHERE id = 1", (err, results) => {
        if (err) return res.status(500).json(err);

        if (results[0].saldo_aktif >= nominal) {
            // 1. Update jumlah tabungan di db_finance_analytics
            dbFinance.query("UPDATE tabungan SET terkumpul = terkumpul + ? WHERE id = ?", [nominal, id], (err) => {
                if (err) return res.status(500).json(err);
                
                // 2. Potong saldo aktif di db_core_wallet
                dbWallet.query("UPDATE wallet SET saldo_aktif = saldo_aktif - ? WHERE id = 1", [nominal]);

                // 3. KOMUNIKASI: Catat ke Riwayat Transaksi (db_core_wallet)
                dbWallet.query(
                    "INSERT INTO transaksi (tipe, judul, nominal) VALUES ('S', 'Sisihkan Tabungan', ?)", 
                    [-nominal], (err) => { if (err) console.error("Gagal catat riwayat tabungan"); }
                );

                // 4. KOMUNIKASI: Tambah Notifikasi (db_core_wallet)
                dbWallet.query(
                    "INSERT INTO notifikasi (judul, pesan) VALUES (?, ?)", 
                    ["Tabungan Berhasil 💰", `Berhasil menyisihkan Rp ${nominal.toLocaleString()} ke tabungan.`],
                    (err) => { if (err) console.error("Gagal buat notif tabungan"); }
                );

                res.json({ message: "Berhasil pindah ke tabungan dan tercatat di riwayat" });
            });
        } else {
            res.status(400).json({ message: "Saldo tidak cukup" });
        }
    });
});

app.listen(PORT, () => console.log(`Server nyala di http://localhost:${PORT}`));