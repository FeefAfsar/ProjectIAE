import { useState, useEffect } from 'react';

export default function Keuangan() {
  const [budgets, setBudgets] = useState([]);
  const [savings, setSavings] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const [resBudget, resSavings] = await Promise.all([
        fetch('http://localhost:5000/api/budget'),
        fetch('http://localhost:5000/api/savings')
      ]);
      const dataBudget = await resBudget.json();
      const dataSavings = await resSavings.json();
      setBudgets(dataBudget);
      setSavings(dataSavings);
      setLoading(false);
    } catch (error) {
      console.error("Gagal mengambil data:", error);
      setLoading(false);
    }
  };

  // --- FUNGSI BARU: Update Tabungan dari Web ---
  const handleSaving = async (id, nama) => {
    const nominal = prompt(`Masukkan jumlah saldo untuk: ${nama}`);
    if (!nominal || isNaN(nominal)) return alert("Masukkan angka yang valid!");

    try {
      const response = await fetch(`http://localhost:5000/api/savings/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tambahan: parseInt(nominal) })
      });

      if (response.ok) {
        alert("Saldo berhasil disisihkan!");
        fetchData(); // Refresh data otomatis
      }
    } catch (error) {
      alert("Gagal update saldo");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const formatIDR = (val) => new Intl.NumberFormat('id-ID', {
    style: 'currency', currency: 'IDR', maximumFractionDigits: 0
  }).format(val);

  if (loading) return <div className="text-center mt-10 font-bold">Menghubungkan ke Server...</div>;

  return (
    <div className="container mx-auto p-4 max-w-4xl mt-6">
      <h1 className="text-2xl font-bold text-slate-800 mb-6 text-center md:text-left">
        Perencanaan Keuangan <span role="img" aria-label="chart">📊</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Kolom Budget */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h2 className="font-bold text-slate-800 mb-4">Batas Pengeluaran</h2>
          {budgets.map((item) => {
            const percentage = Math.min((item.terpakai / item.total) * 100, 100);
            return (
              <div key={item.id} className="mb-6">
                <div className="flex justify-between text-sm mb-1">
                  <span>{item.kategori}</span>
                  <span className={percentage > 85 ? 'text-red-500 font-bold' : ''}>
                    {formatIDR(item.terpakai)} / {formatIDR(item.total)}
                  </span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2.5">
                  <div className={`${percentage > 85 ? 'bg-red-500' : 'bg-green-500'} h-2.5 rounded-full`} style={{ width: `${percentage}%` }}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Kolom Tabungan */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h2 className="font-bold text-slate-800 mb-4">Target Tabungan</h2>
          {savings.map((target) => {
            const progress = Math.round((target.terkumpul / target.target) * 100);
            return (
              <div key={target.id} className="border border-slate-100 p-4 rounded-xl mb-4">
                <div className="flex justify-between mb-2">
                  <h3 className="font-semibold">{target.nama}</h3>
                  <span className="text-blue-600 font-bold">{progress}%</span>
                </div>
                <p className="text-sm text-slate-500 mb-3">{formatIDR(target.terkumpul)} / {formatIDR(target.target)}</p>
                <div className="w-full bg-slate-200 rounded-full h-2 mb-4">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${progress}%` }}></div>
                </div>
                {/* Tombol yang sekarang berfungsi */}
                <button 
                  onClick={() => handleSaving(target.id, target.nama)}
                  className="w-full bg-slate-100 text-blue-600 text-sm font-bold py-2 rounded-lg hover:bg-blue-600 hover:text-white transition"
                >
                  + Sisihkan Saldo ke Sini
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}