import { useState } from 'react';

export default function Transfer() {
  const [nominal, setNominal] = useState('');
  const [tujuan, setTujuan] = useState('');

  const handleTransfer = async (e) => {
    e.preventDefault();
    if (!tujuan || !nominal) return alert("Isi semua data!");

    try {
      const response = await fetch('http://localhost:5000/api/transfer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tujuan: tujuan, nominal: nominal })
      });

      if (response.ok) {
        alert("Transfer Berhasil!");
        setNominal('');
        setTujuan('');
      } else {
        const err = await response.json();
        alert(err.message);
      }
    } catch (error) {
      alert("Gagal menghubungi server");
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-lg mt-6">
      <h1 className="text-2xl font-bold text-slate-800 mb-6 text-center">Transfer Dana 💸</h1>
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
        <form onSubmit={handleTransfer}>
          <div className="mb-5">
            <label className="block text-sm font-semibold text-slate-700 mb-2">Kirim ke</label>
            <input 
              type="text" 
              value={tujuan}
              onChange={(e) => setTujuan(e.target.value)}
              placeholder="Contoh: Adnan" 
              className="w-full px-4 py-3 rounded-xl border border-slate-300"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-semibold text-slate-700 mb-2">Nominal Transfer (Rp)</label>
            <input 
              type="number" 
              value={nominal}
              onChange={(e) => setNominal(e.target.value)}
              placeholder="0" 
              className="w-full px-4 py-3 font-bold rounded-xl border border-slate-300"
              required
            />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3.5 rounded-xl hover:bg-blue-700 transition">
            Lanjutkan Transfer
          </button>
        </form>
      </div>
    </div>
  );
}