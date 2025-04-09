import { useState } from 'react';
import Link from 'next/link';

export default function Eventos() {
  const [eventoSelecionado, setEventoSelecionado] = useState<string | null>(null);

  const eventos = [
    { nome: "Open Lisboa", data: "21 de Abril de 2025", slug: "open-lisboa" },
    { nome: "Porto Masters", data: "3 de Maio de 2025", slug: "porto-masters" },
    { nome: "Algarve Challenge", data: "17 de Maio de 2025", slug: "algarve-challenge" },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold text-lime-400 mb-8 text-center">Eventos</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {eventos.map((evento, idx) => (
          <div key={idx} className="bg-gray-800 p-6 rounded shadow">
            <h2 className="text-xl font-semibold text-lime-300">{evento.nome}</h2>
            <p className="text-gray-300 mt-2">{evento.data}</p>

            <div className="flex justify-between items-center mt-6 gap-4">
              <button
                onClick={() => setEventoSelecionado(evento.nome)}
                className="w-full bg-lime-400 text-black font-bold px-4 py-2 rounded hover:bg-lime-300 transition"
              >
                Inscrever
              </button>

              <Link href={`/eventos/${evento.slug}`} className="w-full">
                <button className="w-full bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600 transition">
                  Saber mais
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Modal de inscrição */}
      {eventoSelecionado && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="bg-white text-black rounded p-8 w-full max-w-md shadow-lg">
            <h3 className="text-xl font-bold mb-4">
              Inscreve-te no {eventoSelecionado}
            </h3>

            <form
              action="https://formspree.io/f/xeoavogl"
              method="POST"
              target="_self"
              onSubmit={() => setEventoSelecionado(null)}
            >
              <input type="hidden" name="_redirect" value="https://fgolf.vercel.app/pagamento" />
              <input type="hidden" name="evento" value={eventoSelecionado ?? ''} />

              <label className="block mb-4">
                Nome:
                <input
                  type="text"
                  name="nome"
                  required
                  className="w-full mt-1 p-2 border border-gray-300 rounded"
                />
              </label>

              <label className="block mb-4">
                Email:
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full mt-1 p-2 border border-gray-300 rounded"
                />
              </label>

              <label className="block mb-4">
                Nº de Sócio da Federação Portuguesa de Golfe:
                <input
                  type="text"
                  name="socio"
                  required
                  className="w-full mt-1 p-2 border border-gray-300 rounded"
                />
              </label>

              <label className="block mb-6">
                Nº de Telemóvel:
                <input
                  type="tel"
                  name="telemovel"
                  required
                  pattern="[0-9]{9}"
                  title="Número de 9 dígitos"
                  className="w-full mt-1 p-2 border border-gray-300 rounded"
                />
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