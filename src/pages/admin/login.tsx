import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [erro, setErro] = useState('');

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('adminLoggedIn');
    if (isLoggedIn) router.push('/admin');
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Credenciais básicas (podes alterar)
    const adminEmail = 'admin@fgolf.com';
    const adminPassword = 'fgolf2025';

    if (email === adminEmail && password === adminPassword) {
      localStorage.setItem('adminLoggedIn', 'true');
      router.push('/admin');
    } else {
      setErro('Credenciais inválidas');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <form onSubmit={handleLogin} className="bg-gray-900 p-8 rounded w-full max-w-sm shadow-lg">
        <h1 className="text-2xl font-bold text-lime-400 mb-6 text-center">Login Admin</h1>

        {erro && <p className="text-red-500 mb-4">{erro}</p>}

        <label className="block mb-4">
          Email:
          <input
            type="email"
            className="w-full mt-1 p-2 border border-gray-700 rounded text-black"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <label className="block mb-6">
          Password:
          <input
            type="password"
            className="w-full mt-1 p-2 border border-gray-700 rounded text-black"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>

        <button type="submit" className="w-full bg-lime-500 hover:bg-lime-400 text-black font-bold py-2 rounded">
          Entrar
        </button>
      </form>
    </div>
  );
}
