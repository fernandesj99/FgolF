import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function AdminDashboard() {
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('adminLoggedIn');
    if (!isLoggedIn) {
      router.push('/admin/login');
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('adminLoggedIn');
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      <div className="max-w-4xl mx-auto bg-gray-900 p-8 rounded shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-lime-400">Painel de Administração</h1>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white font-semibold px-4 py-2 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>

        <p className="text-gray-300 mb-6">Bem-vindo ao painel! Em breve vais ver aqui as inscrições por evento.</p>

        <div className="bg-gray-800 p-6 rounded">
          <p className="text-white text-lg">[ Zona de gestão de eventos e inscrições futura ]</p>
        </div>
      </div>
    </div>
  );
}