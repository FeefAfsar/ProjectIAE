import { useState, useEffect } from 'react';

export default function Dashboard() {
  // 1. State untuk menyimpan data dari Backend
  const [saldo, setSaldo] = useState(0);
  const [transaksi, setTransaksi] = useState([]);
  const [loading, setLoading] = useState(true);


  
  // 2. Fungsi untuk mengambil data terbaru
  const fetchDashboardData = async () => {
    try {
      // Ambil saldo dan histori transaksi (sesuaikan endpoint API-mu)
      const resSaldo = await fetch('http://localhost:5000/api/saldo');
      const dataSaldo = await resSaldo.json();
      
      // Jika kamu punya endpoint histori transaksi, ambil di sini
      // const resTrans = await fetch('http://localhost:5000/api/transactions');
      // const dataTrans = await resTrans.json();

      setSaldo(dataSaldo.saldo);
      // setTransaksi(dataTrans); 
      setLoading(false);
    } catch (error) {
      console.error("Gagal mengambil data dashboard:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const formatIDR = (val) => new Intl.NumberFormat('id-ID', {
    style: 'currency', currency: 'IDR', maximumFractionDigits: 0
  }).format(val);

  if (loading) return <div className="p-6">Memuat Dashboard...</div>;

  return (
    <div className="container mx-auto p-4 max-w-4xl mt-6">
      <h1 className="text-2xl font-bold text-slate-800 mb-6">Halo, Afif! 👋</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Kartu Saldo - SEKARANG DINAMIS */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <p className="text-slate-500 mb-1 font-medium">Total Saldo Aktif</p>
          <h2 className="text-4xl font-extrabold text-blue-600 mb-6">
            {formatIDR(saldo)}
          </h2>
          
          <div className="flex gap-3">
            <button className="flex-1 bg-blue-600 text-white py-2.5 rounded-xl font-medium hover:bg-blue-700 transition">
              + Top Up
            </button>
            <button className="flex-1 bg-slate-100 text-blue-700 py-2.5 rounded-xl font-medium hover:bg-slate-200 transition">
              ↗ Transfer
            </button>
          </div>
        </div>

        {/* Histori Transaksi */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h3 className="font-bold text-slate-800 mb-4 border-b pb-2">Transaksi Terakhir</h3>
          
          <div className="space-y-4 mt-4">
            {/* Jika transaksi masih dummy, biarkan dulu, tapi saldo sudah berkurang */}
            <div className="flex justify-between items-center">
              <div>
                <p className="font-semibold text-slate-700">Makan Kantin</p>
                <p className="text-xs text-slate-400">Hari ini • QRIS</p>
              </div>
              <p className="font-bold text-red-500">- Rp 20.000</p>
            </div>
            {/* ... data lainnya ... */}
          </div>
        </div>

      </div>
    </div>
  );
}