import Link from 'next/link';
import { resultados } from '../data/resultados';

export default function Resultados() {
  return (
    <div className="min-h-screen bg-white p-10">
      <h1 className="text-4xl font-bold text-black mb-8 text-center">Resultados</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {resultados.map((evento, idx) => (
          <div key={idx} className="bg-gray-100 p-6 rounded shadow hover:scale-105 transition-transform duration-300">
            <h2 className="text-xl font-semibold text-black text-center">{evento.nome}</h2>
            <p className="text-gray-700 mt-2 text-center">{evento.data}</p>

            <div className="mt-4 flex flex-col gap-2">
              {/* Resultados PDF */}
              <a
                href={evento.resultados}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <button className="w-full bg-green-900 text-white font-semibold px-4 py-2 rounded hover:bg-green-800 transition">
                  Resultados (PDF)
                </button>
              </a>

              {/* Saber Mais */}
              <Link href={`/eventos/${evento.slug}`}>
                <button className="w-full bg-green-700 text-white font-semibold px-4 py-2 rounded hover:bg-green-800 transition">
                  Saber mais
                </button>
              </Link>

              {/* Draw PDF */}
              <a
                href={evento.draw}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <button className="w-full bg-green-500 text-white font-semibold px-4 py-2 rounded hover:bg-green-600 transition">
                  Draw (PDF)
                </button>
              </a>

              {/* Ver melhores momentos */}
              <a
                href={evento.video}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <button className="w-full bg-green-400 text-white font-semibold px-4 py-2 rounded hover:bg-green-500 transition">
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