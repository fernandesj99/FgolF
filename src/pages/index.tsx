import Link from 'next/link';
import { eventos } from '../data/eventos';
import Countdown from '../components/countdown';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black px-6 py-12">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-lime-600 mb-4">
          Bem-vindo ao futuro do golfe.
        </h1>
        <p className="text-lg text-gray-700 mb-12">
          Acompanha os eventos, explora os jogadores, vive a emoção.
        </p>

        <h2 className="text-3xl font-semibold text-lime-500 mb-10">
          Próximos Eventos
        </h2>

        <div className="flex flex-col items-center gap-8">
          {eventos.map((evento, idx) => (
            <div
              key={idx}
              className="bg-gray-100 text-black rounded-lg shadow-md p-6 w-full max-w-md"
            >
              <h3 className="text-xl font-bold text-lime-600 mb-2">{evento.nome}</h3>
              <p className="text-gray-700 mb-2">{evento.data}</p>
              <Countdown targetDate={evento.dataCompleta} />
              <Link href={`/eventos/${evento.slug}`} passHref>
                <button className="mt-4 bg-blue-600 text-white font-semibold px-4 py-2 rounded hover:bg-blue-700 transition">
                  Saber mais
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}