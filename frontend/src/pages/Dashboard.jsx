export default function Dashboard() {
  return (
    <div className="container mx-auto p-4 max-w-4xl mt-6">
      <h1 className="text-2xl font-bold text-slate-800 mb-6">Halo, Afif! 👋</h1>

      {/* Grid Layout: 1 kolom di HP, 2 kolom di Laptop (md:grid-cols-2) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Kolom Kiri: Kartu Saldo */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <p className="text-slate-500 mb-1 font-medium">Total Saldo Aktif</p>
          <h2 className="text-4xl font-extrabold text-blue-600 mb-6">Rp 500.000</h2>
          
          <div className="flex gap-3">
            <button className="flex-1 bg-blue-600 text-white py-2.5 rounded-xl font-medium hover:bg-blue-700 transition shadow-sm">
              + Top Up
            </button>
            <button className="flex-1 bg-slate-100 text-blue-700 py-2.5 rounded-xl font-medium hover:bg-slate-200 transition">
              ↗ Transfer
            </button>
          </div>
        </div>

        {/* Kolom Kanan: Histori Transaksi */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h3 className="font-bold text-slate-800 mb-4 border-b pb-2">Transaksi Terakhir</h3>
          
          <div className="space-y-4 mt-4">
            {/* Dummy Data Transaksi 1 */}
            <div className="flex justify-between items-center">
              <div>
                <p className="font-semibold text-slate-700">Makan Kantin</p>
                <p className="text-xs text-slate-400">Hari ini • QRIS</p>
              </div>
              <p className="font-bold text-red-500">- Rp 20.000</p>
            </div>

            {/* Dummy Data Transaksi 2 */}
            <div className="flex justify-between items-center">
              <div>
                <p className="font-semibold text-slate-700">Top Up dari Bank</p>
                <p className="text-xs text-slate-400">Kemarin • Transfer Masuk</p>
              </div>
              <p className="font-bold text-green-500">+ Rp 100.000</p>
            </div>
          </div>
          
        </div>

      </div>
    </div>
  );
}