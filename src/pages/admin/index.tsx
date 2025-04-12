import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../../lib/supabase';
import { saveAs } from 'file-saver';

interface Inscricao {
  id: string;
  nome: string;
  email: string;
  socio: string;
  telemovel: string;
  evento: string;
  created_at: string;
}

export default function AdminDashboard() {
  const router = useRouter();
  const [inscricoes, setInscricoes] = useState<Inscricao[]>([]);
  const [eventoSelecionado, setEventoSelecionado] = useState<string>('todos');

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('adminLoggedIn');
    if (!isLoggedIn) {
      router.push('/admin/login');
    } else {
      fetchInscricoes();
    }
  }, []);

  const fetchInscricoes = async () => {
    const { data, error } = await supabase
      .from('inscricoes')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error && data) {
      setInscricoes(data as Inscricao[]);
    }
  };

  const exportCSV = () => {
    const headers = ['Evento', 'Nome', 'Email', 'Sócio', 'Telemóvel', 'Data'];
    const rows = inscricoesFiltradas.map((i) => [
      i.evento,
      i.nome,
      i.email,
      i.socio,
      i.telemovel,
      new Date(i.created_at).toLocaleString('pt-PT'),
    ]);

    const csvContent = [headers, ...rows]
      .map((row) => row.join(';'))
      .join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, 'inscricoes.csv');
  };

  const handleLogout = () => {
    localStorage.removeItem('adminLoggedIn');
    router.push('/');
  };

  const eventosUnicos = Array.from(new Set(inscricoes.map((i) => i.evento)));

  const inscricoesFiltradas =
    eventoSelecionado === 'todos'
      ? inscricoes
      : inscricoes.filter((i) => i.evento === eventoSelecionado);

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      <div className="max-w-5xl mx-auto bg-gray-900 p-8 rounded shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-lime-400">Painel de Administração</h1>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white font-semibold px-4 py-2 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-semibold text-white mb-2">
            Inscrições recebidas: {inscricoesFiltradas.length} de {inscricoes.length}
          </h2>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <select
              value={eventoSelecionado}
              onChange={(e) => setEventoSelecionado(e.target.value)}
              className="text-black p-2 rounded w-full md:w-auto"
            >
              <option value="todos">Todos os eventos</option>
              {eventosUnicos.map((evento, idx) => (
                <option key={idx} value={evento}>{evento}</option>
              ))}
            </select>

            <button
              onClick={exportCSV}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Exportar CSV
            </button>
          </div>
        </div>

        {inscricoesFiltradas.length > 0 ? (
          <ul className="space-y-4 mt-6">
            {inscricoesFiltradas.map((inscricao) => (
              <li key={inscricao.id} className="bg-gray-800 p-4 rounded shadow">
                <div className="flex justify-between items-start">
                  <div>
                    <p><strong>Nome:</strong> {inscricao.nome}</p>
                    <p><strong>Email:</strong> {inscricao.email}</p>
                    <p><strong>Nº Sócio:</strong> {inscricao.socio}</p>
                    <p><strong>Telemóvel:</strong> {inscricao.telemovel}</p>
                    <p className="text-sm text-gray-400 mt-2">
                      Inscrito em: {new Date(inscricao.created_at).toLocaleString('pt-PT')}
                    </p>
                  </div>

                  <button
                    onClick={async () => {
                      const confirmar = confirm("Tens a certeza que queres eliminar esta inscrição?");
                      if (!confirmar) return;

                      const { error } = await supabase
                        .from('inscricoes')
                        .delete()
                        .eq('id', inscricao.id);

                      if (!error) {
                        setInscricoes((prev) => prev.filter((i) => i.id !== inscricao.id));
                      } else {
                        alert("Erro ao eliminar inscrição.");
                      }
                    }}
                    className="text-sm text-red-400 hover:text-red-600 ml-4"
                  >
                    Eliminar
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-400 mt-6">Nenhuma inscrição disponível.</p>
        )}
      </div>
    </div>
  );
}