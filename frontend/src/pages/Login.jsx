import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-100 max-w-sm w-full">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-blue-600 mb-2">Sobat Kantong</h1>
          <p className="text-slate-500 text-sm">Masuk untuk mengelola keuanganmu</p>
        </div>

        <form className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Email Mahasiswa</label>
            <input 
              type="email" 
              placeholder="afif@student.telkomuniversity.ac.id" 
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Password</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white font-bold py-3 rounded-xl hover:bg-blue-700 transition shadow-sm mt-4"
          >
            Masuk
          </button>
        </form>

        <p className="text-center text-sm text-slate-500 mt-6">
          Belum punya akun? <span className="text-blue-600 font-semibold cursor-pointer">Daftar di sini</span>
        </p>
      </div>
    </div>
  );
}