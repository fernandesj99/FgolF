import { useState } from 'react';
import { supabase } from '../lib/supabase';
import Link from 'next/link';
import { eventos } from '../data/eventos';
import Countdown from '../components/countdown';

export default function Eventos() {
  const [eventoSelecionado, setEventoSelecionado] = useState<string | null>(null);
  const eventoObj = eventos.find(e => e.nome === eventoSelecionado);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const nome = formData.get('nome')?.toString() || '';
    const email = formData.get('email')?.toString() || '';
    const socio = formData.get('socio')?.toString() || '';
    const telemovel = formData.get('telemovel')?.toString() || '';
    const evento = eventoSelecionado;

    // Inserir no Supabase
    const { data, error } = await supabase.from('inscricoes').insert([
      { evento, nome, email, socio, telemovel },
    ]);

    console.log('SUPABASE:', { data, error });

    // Enviar para Formspree
    await fetch('https://formspree.io/f/xeoavogl', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ evento, nome, email, socio, telemovel }),
    });

    // Redirecionar
    setEventoSelecionado(null);
    window.location.href = `/pagamento?evento=${eventoObj?.slug}`;
  };

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold text-lime-400 mb-8 text-center">Eventos</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {eventos.map((evento, idx) => {
          const dataEvento = new Date(evento.dataCompleta);
          const agora = new Date();
          const youtubeLink =
            agora >= dataEvento && evento.linkYoutubeEvento
              ? evento.linkYoutubeEvento
              : 'https://www.youtube.com/channel/UCvP7RKs1x7wBHc2TZ_VpkWQ';

          return (
            <div key={idx} className="bg-gray-800 p-6 rounded shadow">
              <div className="text-center">
                <h2 className="text-xl font-semibold text-lime-300">{evento.nome}</h2>
                <p className="text-gray-300 mt-2">{evento.data}</p>
                <Countdown targetDate={evento.dataCompleta} />
              </div>



              <div className="flex flex-col sm:flex-row justify-center items-center mt-6 space-y-2 sm:space-y-0 sm:space-x-2">
                <button
                  onClick={() => setEventoSelecionado(evento.nome)}
                  className="w-full sm:w-auto bg-green-800 text-white font-bold px-4 py-2 rounded hover:bg-green-700 transition transform hover:scale-105"
                /*className="w-full sm:w-auto bg-lime-400 text-black font-bold px-4 py-2 rounded hover:bg-lime-300 transition transform hover:scale-105" */
                >
                  Inscrever
                </button>

                <Link href={`/eventos/${evento.slug}`} className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto bg-blue-500 text-white font-bold px-4 py-2 rounded hover:bg-blue-600 transition transform hover:scale-105">
                  Saber mais
                  </button>
                </Link>

                <a
                  href={youtubeLink}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="w-full sm:w-auto"
                >
                  <button className="w-full sm:w-auto bg-red-600 text-white font-bold px-4 py-2 rounded hover:bg-red-500 transition transform hover:scale-105">
                    Ver
                  </button>
                </a>
              </div>

            </div>
          );
        })}
      </div>

      {/* Modal de inscrição */}
      {eventoSelecionado && eventoObj && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="bg-white text-black rounded p-8 w-full max-w-md shadow-lg">
            <h3 className="text-xl font-bold mb-4">Inscrição no {eventoSelecionado}</h3>

            <form onSubmit={handleSubmit}>
              <input type="hidden" name="evento" value={eventoSelecionado ?? ''} />

              <label className="block mb-4">
                Nome:
                <input type="text" name="nome" required className="w-full mt-1 p-2 border rounded" />
              </label>

              <label className="block mb-4">
                Email:
                <input type="email" name="email" required className="w-full mt-1 p-2 border rounded" />
              </label>

              <label className="block mb-4">
                Nº de Sócio:
                <input type="text" name="socio" required className="w-full mt-1 p-2 border rounded" />
              </label>

              <label className="block mb-6">
                Nº de Telemóvel:
                <input
                  type="tel"
                  name="telemovel"
                  required
                  pattern="[0-9]{9}"
                  title="Número de 9 dígitos"
                  className="w-full mt-1 p-2 border rounded"
                />
              </label>

              <label className="block mb-6 text-sm text-gray-800">
                <input type="checkbox" required className="mr-2" />
                Autorizo o uso dos meus dados para efeitos de inscrição e comunicação, conforme os
                termos e condições do torneio.
              </label>

              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setEventoSelecionado(null)}
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-lime-500 text-white font-semibold rounded hover:bg-lime-400"
                >
                  Confirmar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}