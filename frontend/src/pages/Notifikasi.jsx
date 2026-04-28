export default function Notifikasi() {
  return (
    <div className="container mx-auto p-4 max-w-2xl mt-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-slate-800">Notifikasi 🔔</h1>
        <button className="text-sm text-blue-600 font-semibold hover:underline">
          Tandai semua dibaca
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="divide-y divide-slate-100">
          
          {/* Notifikasi 1: Belum dibaca (Budget Alert) */}
          <div className="p-4 flex gap-4 bg-blue-50/50 hover:bg-slate-50 transition cursor-pointer">
            <div className="mt-1">
              {/* Indikator titik biru untuk belum dibaca */}
              <div className="w-2.5 h-2.5 bg-blue-600 rounded-full"></div>
            </div>
            <div className="flex-1">
              <p className="font-semibold text-slate-800">Peringatan Budget: Makan & Minum</p>
              <p className="text-sm text-slate-600 mt-1">Pengeluaranmu untuk kategori ini sudah mencapai 90% dari limit bulanan. Yuk, mulai hemat!</p>
              <p className="text-xs text-slate-400 mt-2">Hari ini • 10:30 WIB</p>
            </div>
          </div>

          {/* Notifikasi 2: Sudah dibaca (Payment Success) */}
          <div className="p-4 flex gap-4 hover:bg-slate-50 transition cursor-pointer">
            <div className="mt-1">
              {/* Spasi kosong agar sejajar */}
              <div className="w-2.5 h-2.5"></div>
            </div>
            <div className="flex-1">
              <p className="font-semibold text-slate-700">Transfer Berhasil ✅</p>
              <p className="text-sm text-slate-600 mt-1">Transfer sebesar Rp 50.000 ke Adnan telah berhasil diproses.</p>
              <p className="text-xs text-slate-400 mt-2">Kemarin • 14:30 WIB</p>
            </div>
          </div>

          {/* Notifikasi 3: Sudah dibaca (System Broadcast) */}
          <div className="p-4 flex gap-4 hover:bg-slate-50 transition cursor-pointer">
            <div className="mt-1">
              <div className="w-2.5 h-2.5"></div>
            </div>
            <div className="flex-1">
              <p className="font-semibold text-slate-700">Selamat Datang di Sobat Kantong!</p>
              <p className="text-sm text-slate-600 mt-1">Kelola keuangan mahasiswamu jadi lebih mudah. Jangan lupa atur PIN keamananmu ya.</p>
              <p className="text-xs text-slate-400 mt-2">25 April 2026 • 09:00 WIB</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}