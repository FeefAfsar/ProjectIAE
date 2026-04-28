import { useState } from 'react';

export default function Transfer() {
  const [nominal, setNominal] = useState('');

  // Fungsi untuk format angka menjadi Rupiah saat diketik
  const handleNominalChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    setNominal(value);
  };

  return (
    <div className="container mx-auto p-4 max-w-lg mt-6">
      <h1 className="text-2xl font-bold text-slate-800 mb-6 text-center">Transfer Dana 💸</h1>

      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
        <form>
          {/* Input Tujuan Transfer */}
          <div className="mb-5">
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Kirim ke (ID User / Rekening)
            </label>
            <input 
              type="text" 
              placeholder="Contoh: 1234567890" 
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              required
            />
          </div>

          {/* Input Nominal */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Nominal Transfer (Rp)
            </label>
            <div className="relative">
              <span className="absolute left-4 top-3.5 text-slate-500 font-bold">Rp</span>
              <input 
                type="text" 
                value={nominal}
                onChange={handleNominalChange}
                placeholder="0" 
                className="w-full pl-12 pr-4 py-3 text-lg font-bold rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                required
              />
            </div>
          </div>

          {/* Tombol Pilihan Cepat (Opsional untuk UI yang lebih bagus) */}
          <div className="flex gap-2 mb-8">
            <button type="button" onClick={() => setNominal('50000')} className="flex-1 text-sm bg-blue-50 text-blue-600 font-medium py-2 rounded-lg hover:bg-blue-100 transition">50 Ribu</button>
            <button type="button" onClick={() => setNominal('100000')} className="flex-1 text-sm bg-blue-50 text-blue-600 font-medium py-2 rounded-lg hover:bg-blue-100 transition">100 Ribu</button>
            <button type="button" onClick={() => setNominal('500000')} className="flex-1 text-sm bg-blue-50 text-blue-600 font-medium py-2 rounded-lg hover:bg-blue-100 transition">500 Ribu</button>
          </div>

          {/* Tombol Konfirmasi */}
          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white font-bold py-3.5 rounded-xl hover:bg-blue-700 transition shadow-md"
          >
            Lanjutkan Transfer
          </button>
        </form>
      </div>
    </div>
  );
}