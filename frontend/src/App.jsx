import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Transfer from './pages/Transfer';
import Login from './pages/Login';
import Keuangan from './pages/Keuangan';
import Riwayat from './pages/Riwayat';
import Notifikasi from './pages/Notifikasi';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Navbar akan selalu muncul di atas */}
      <Navbar />
      
      {/* Routes mengatur isi konten berdasarkan URL */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Dashboard />} />
        {/* Nanti kita tambah halaman transfer di sini */}
        <Route path="/transfer" element={<Transfer />} />
        <Route path="/keuangan" element={<Keuangan />} />
        <Route path="/riwayat" element={<Riwayat />} />
        <Route path="/notifikasi" element={<Notifikasi />} />
      </Routes>
    </div>
  );
}

export default App;