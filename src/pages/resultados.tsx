import Link from 'next/link';
import { resultados } from '../data/resultados';

export default function Resultados() {
  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold text-lime-400 mb-8 text-center">Resultados</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {resultados.map((evento, idx) => (
          <div key={idx} className="bg-gray-800 p-6 rounded shadow">
            <h2 className="text-xl font-semibold text-lime-300">{evento.nome}</h2>
            <p className="text-gray-300 mt-2">{evento.data}</p>

            <div className="mt-4 flex flex-col gap-2">
              <Link href={`/resultados/${evento.slug}`}>
                <button className="w-full bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600 transition">
                  Saber mais
                </button>
              </Link>

              <a
                href={evento.draw}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <button className="w-full bg-yellow-500 text-black font-semibold px-4 py-2 rounded hover:bg-yellow-400 transition">
                  Draw (PDF)
                </button>
              </a>

              <a
                href={evento.resultados}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <button className="w-full bg-lime-500 text-black font-semibold px-4 py-2 rounded hover:bg-lime-400 transition">
                  Resultados (PDF)
                </button>
              </a>

              <a
                href={evento.video}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <button className="w-full bg-red-600 text-white font-semibold px-4 py-2 rounded hover:bg-red-500 transition">
                  Ver melhores momentos
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}