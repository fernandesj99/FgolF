import Link from 'next/link';
import Countdown from '../components/countdown';

export default function Home() {
  const slugDoEvento = 'open-lisboa';

  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col items-center px-4 py-12 w-full max-w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="text-center max-w-2xl">
        <img src="/logooficial/logo.png" alt="Limitless Golf Logo" className="mx-auto w-32 md:w-40" />
        <div className="mt-4 text-xl text-gray-300 space-y-2">
          <p>Bem-vindo ao futuro do golfe.</p>
          <p>Acompanha os eventos, explora os jogadores, vive a emoção.</p>
        </div>

        <Link href="/eventos">
          <button className="mt-8 px-6 py-3 bg-lime-400 text-black font-bold rounded hover:bg-lime-300 transition">
            Ver próximos eventos
          </button>
        </Link>
      </section>

      {/* Próximo Evento */}
      <section className="w-full max-w-4xl mt-16 flex justify-center">
        <div className="w-full max-w-md max-w-[90%]">
          <Link href={`/eventos/${slugDoEvento}`}>
            <div className="p-6 bg-blue-900 rounded shadow text-center cursor-pointer hover:bg-blue-800 transition">
              <h2 className="text-xl font-semibold text-lime-400">Próximo Evento</h2>
              <p className="mt-2 text-gray-300">Jamor, 17 de Maio de 2025 – 11h00</p>
              <Countdown targetDate="2025-05-17T11:00:00" />
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}