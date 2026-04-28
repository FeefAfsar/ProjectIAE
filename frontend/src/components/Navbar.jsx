import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center max-w-4xl">
        <Link to="/" className="text-xl font-bold flex items-center gap-2">
          👛 Sobat Kantong
        </Link>
        <div className="space-x-4 text-sm md:text-base font-medium">
          <Link to="/" className="hover:text-blue-200 transition">Beranda</Link>
          <Link to="/transfer" className="hover:text-blue-200 transition">Transfer</Link>
          <Link to="/keuangan" className="hover:text-blue-200 transition">Keuangan</Link>
          <Link to="/riwayat" className="hover:text-blue-200 transition">Riwayat</Link>
          <Link to="/notifikasi" className="relative hover:text-blue-200 transition ml-2">
            <span className="text-xl">🔔</span>
            <span className="absolute -top-1 -right-1 bg-red-500 border-2 border-blue-600 text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
              1
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}