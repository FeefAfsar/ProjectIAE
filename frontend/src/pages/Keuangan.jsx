export default function Keuangan() {
  return (
    <div className="container mx-auto p-4 max-w-4xl mt-6">
      <h1 className="text-2xl font-bold text-slate-800 mb-6 text-center md:text-left">
        Perencanaan Keuangan <span role="img" aria-label="chart">📊</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Kolom Kiri: Budget Bulanan */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold text-slate-800">Batas Pengeluaran (Bulan Ini)</h2>
            <button className="text-sm text-blue-600 font-semibold">+ Atur Budget</button>
          </div>
          
          <div className="mb-4">
            <div className="flex justify-between text-sm mb-1">
              {/* Perbaikan & menjadi &amp; di sini */}
              <span className="text-slate-600">Makan &amp; Minum</span>
              <span className="font-semibold text-red-500">Rp 450.000 / Rp 500.000</span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-2.5">
              <div className="bg-red-500 h-2.5 rounded-full" style={{ width: '90%' }}></div>
            </div>
            <p className="text-xs text-red-500 mt-1">Awas, hampir over budget!</p>
          </div>

          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-slate-600">Transportasi</span>
              <span className="font-semibold text-green-500">Rp 50.000 / Rp 200.000</span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-2.5">
              <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '25%' }}></div>
            </div>
          </div>
        </div>

        {/* Kolom Kanan: Target Tabungan */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold text-slate-800">Target Tabungan</h2>
            <button className="text-sm text-blue-600 font-semibold">+ Buat Target</button>
          </div>

          <div className="border border-slate-100 p-4 rounded-xl">
            <div className="flex justify-between mb-2">
              <h3 className="font-semibold text-slate-700">Beli Laptop Baru</h3>
              <span className="text-sm font-bold text-blue-600">20%</span>
            </div>
            <p className="text-sm text-slate-500 mb-3">Terkumpul: Rp 1.000.000 / Rp 5.000.000</p>
            <div className="w-full bg-slate-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{ width: '20%' }}></div>
            </div>
            <button className="w-full mt-4 bg-slate-100 text-blue-600 text-sm font-bold py-2 rounded-lg hover:bg-slate-200 transition">
              + Sisihkan Saldo ke Sini
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}