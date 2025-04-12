import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../../lib/supabase';

export default function Painel() {
  const [user, setUser] = useState<any>(null);
  const [inscricoes, setInscricoes] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (!data?.user) {
        router.push('/admin/login');
      } else {
        setUser(data.user);
        buscarInscricoes();
      }
    });
  }, []);

  const buscarInscricoes = async () => {
    const { data, error } = await supabase.from('inscricoes').select('*').order('id', { ascending: false });
    if (error) {
      console.error('Erro ao buscar inscrições:', error);
    } else {
      setInscricoes(data);
    }
  };

  const logout = async () => {
    await supabase.auth.signOut();
    router.push('/admin/login');
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-lime-400">Painel de Administração</h1>
        <button onClick={logout} className="bg-red-600 px-4 py-2 rounded font-semibold hover:bg-red-500">
          Logout
        </button>
      </div>

      <h2 className="text-2xl mb-4">Inscrições Recebidas</h2>

      {inscricoes.length === 0 ? (
        <p className="text-gray-400">Nenhuma inscrição encontrada.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full bg-gray-800 rounded text-sm">
            <thead>
              <tr className="bg-gray-700 text-left">
                <th className="p-3">Evento</th>
                <th className="p-3">Nome</th>
                <th className="p-3">Email</th>
                <th className="p-3">Sócio</th>
                <th className="p-3">Telemóvel</th>
              </tr>
            </thead>
            <tbody>
              {inscricoes.map((item, idx) => (
                <tr key={idx} className="border-t border-gray-600 hover:bg-gray-700">
                  <td className="p-3">{item.evento}</td>
                  <td className="p-3">{item.nome}</td>
                  <td className="p-3">{item.email}</td>
                  <td className="p-3">{item.socio}</td>
                  <td className="p-3">{item.telemovel}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}