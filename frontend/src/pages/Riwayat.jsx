import { useState, useEffect } from 'react';

export default function Riwayat() {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchHistory = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/riwayat');
      const data = await response.json();
      setHistory(data);
      setLoading(false);
    } catch (error) {
      console.error("Gagal ambil riwayat:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  // Hitung otomatis ringkasan dari data DB
  const pemasukan = history.filter(item => item.nominal > 0).reduce((acc, curr) => acc + curr.nominal, 0);
  const pengeluaran = history.filter(item => item.nominal < 0).reduce((acc, curr) => acc + Math.abs(curr.nominal), 0);

  const formatIDR = (val) => new Intl.NumberFormat('id-ID', {
    style: 'currency', currency: 'IDR', maximumFractionDigits: 0
  }).format(val);

  if (loading) return <div className="p-6 text-center">Memuat Riwayat...</div>;

  return (
    <div className="container mx-auto p-4 max-w-4xl mt-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-slate-800">Riwayat Transaksi 📝</h1>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-green-50 p-4 rounded-xl border border-green-100">
          <p className="text-sm text-green-600 font-medium mb-1">Total Pemasukan</p>
          <h2 className="text-xl font-bold text-green-700">+ {formatIDR(pemasukan)}</h2>
        </div>
        <div className="bg-red-50 p-4 rounded-xl border border-red-100">
          <p className="text-sm text-red-600 font-medium mb-1">Total Pengeluaran</p>
          <h2 className="text-xl font-bold text-red-700">- {formatIDR(pengeluaran)}</h2>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="divide-y divide-slate-100">
          {history.map((item) => (
            <div key={item.id} className="p-4 flex justify-between items-center hover:bg-slate-50 transition">
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${item.nominal > 0 ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'}`}>
                  {item.tipe}
                </div>
                <div>
                  <p className="font-semibold text-slate-800">{item.judul}</p>
                  <p className="text-xs text-slate-500">{new Date(item.tanggal).toLocaleString('id-ID')}</p>
                </div>
              </div>
              <p className={`font-bold ${item.nominal > 0 ? 'text-green-500' : 'text-red-500'}`}>
                {item.nominal > 0 ? '+' : '-'} {formatIDR(Math.abs(item.nominal))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}