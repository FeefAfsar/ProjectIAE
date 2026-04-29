import { useState, useEffect } from 'react';

export default function Notifikasi() {
  const [listNotif, setListNotif] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fungsi ambil data dari API
  const fetchNotif = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/notifikasi');
      const data = await response.json();
      setListNotif(data);
      setLoading(false);
    } catch (error) {
      console.error("Gagal ambil notif:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotif();
  }, []);

  if (loading) return <div className="p-6">Memuat Notifikasi...</div>;

  return (
    <div className="container mx-auto p-4 max-w-2xl mt-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-slate-800">Notifikasi 🔔</h1>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="divide-y divide-slate-100">
          
          {listNotif.length === 0 ? (
            <div className="p-6 text-center text-slate-500">Belum ada notifikasi baru.</div>
          ) : (
            listNotif.map((n) => (
              <div key={n.id} className={`p-4 flex gap-4 ${n.is_read ? '' : 'bg-blue-50/50'} hover:bg-slate-50 transition`}>
                <div className="mt-1">
                  {!n.is_read && <div className="w-2.5 h-2.5 bg-blue-600 rounded-full"></div>}
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-slate-800">{n.judul}</p>
                  <p className="text-sm text-slate-600 mt-1">{n.pesan}</p>
                  <p className="text-xs text-slate-400 mt-2">{new Date(n.tanggal).toLocaleString('id-ID')}</p>
                </div>
              </div>
            ))
          )}

        </div>
      </div>
    </div>
  );
}