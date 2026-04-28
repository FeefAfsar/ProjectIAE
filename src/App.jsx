import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Navbar akan selalu muncul di atas */}
      <Navbar />
      
      {/* Routes mengatur isi konten berdasarkan URL */}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        {/* Nanti kita tambah halaman transfer di sini */}
      </Routes>
    </div>
  );
}

export default App;