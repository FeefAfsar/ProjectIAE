export default function Riwayat() {
  return (
    <div className="container mx-auto p-4 max-w-4xl mt-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-slate-800">Riwayat Transaksi 📝</h1>
        <button className="bg-slate-100 text-blue-600 font-semibold py-2 px-4 rounded-lg hover:bg-slate-200 transition shadow-sm">
          ⬇️ Export Laporan
        </button>
      </div>

      {/* Ringkasan Bulan Ini */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-green-50 p-4 rounded-xl border border-green-100">
          <p className="text-sm text-green-600 font-medium mb-1">Pemasukan Bulan Ini</p>
          <h2 className="text-xl font-bold text-green-700">+ Rp 1.500.000</h2>
        </div>
        <div className="bg-red-50 p-4 rounded-xl border border-red-100">
          <p className="text-sm text-red-600 font-medium mb-1">Pengeluaran Bulan Ini</p>
          <h2 className="text-xl font-bold text-red-700">- Rp 470.000</h2>
        </div>
      </div>

      {/* Daftar Transaksi */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-4 border-b border-slate-50 bg-slate-50">
          <h3 className="font-semibold text-slate-700">Bulan Ini (April 2026)</h3>
        </div>
        
        <div className="divide-y divide-slate-100">
          {/* Item Transaksi 1: Transfer */}
          <div className="p-4 flex justify-between items-center hover:bg-slate-50 transition cursor-pointer">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                T
              </div>
              <div>
                <p className="font-semibold text-slate-800">Transfer ke Adnan</p>
                <p className="text-xs text-slate-500">28 April 2026 • 14:30 WIB</p>
              </div>
            </div>
            <p className="font-bold text-red-500">- Rp 50.000</p>
          </div>

          {/* Item Transaksi 2: Top Up */}
          <div className="p-4 flex justify-between items-center hover:bg-slate-50 transition cursor-pointer">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">
                +
              </div>
              <div>
                <p className="font-semibold text-slate-800">Top Up Saldo</p>
                <p className="text-xs text-slate-500">27 April 2026 • 09:15 WIB</p>
              </div>
            </div>
            <p className="font-bold text-green-500">+ Rp 500.000</p>
          </div>
          
          {/* Item Transaksi 3: QRIS */}
          <div className="p-4 flex justify-between items-center hover:bg-slate-50 transition cursor-pointer">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold">
                Q
              </div>
              <div>
                <p className="font-semibold text-slate-800">Makan Kantin (QRIS)</p>
                <p className="text-xs text-slate-500">26 April 2026 • 12:00 WIB</p>
              </div>
            </div>
            <p className="font-bold text-red-500">- Rp 20.000</p>
          </div>
        </div>
      </div>
    </div>
  );
}