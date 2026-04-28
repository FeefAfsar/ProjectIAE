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
        </div>
      </div>
    </nav>
  );
}