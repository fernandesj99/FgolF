import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col items-center px-4 py-12">
      {/* Hero Section */}
      <section className="text-center max-w-2xl">
        <h1 className="text-5xl md:text-6xl font-bold text-lime-400">FgolF</h1>
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

      {/* Destaques rápidos */}
      <section className="w-full max-w-4xl mt-16 flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Próximo Evento */}
          <Link
            href="/eventos"
            className="p-6 bg-blue-900 rounded shadow text-center hover:bg-blue-800 transition"
          >
            <div>
              <h2 className="text-xl font-semibold text-lime-400">Próximo Evento</h2>
              <p className="mt-2 text-gray-300">Jamor, 21 de Abril de 2025 – 11h00</p>
            </div>
          </Link>

          {/* Jogadores em Destaque */}
          <Link
            href="/jogadores"
            className="p-6 bg-blue-900 rounded shadow text-center hover:bg-blue-800 transition"
          >
            <div>
              <h2 className="text-xl font-semibold text-lime-400">Jogadores em Destaque</h2>
              <p className="mt-2 text-gray-300">João Fernandes – 5 vitórias</p>
              <p className="text-gray-300">Martim Fonseca – 5 vitórias</p>
            </div>
          </Link>
        </div>

        {/* Últimas Notícias */}
        <Link
          href="/noticias"
          className="p-6 bg-blue-900 rounded shadow text-center hover:bg-blue-800 transition block"
        >
          <div>
            <h2 className="text-xl font-semibold text-lime-400">Últimas Notícias</h2>
            <p className="mt-2 text-gray-300">Novo circuito anunciado para o verão</p>
          </div>
        </Link>
      </section>
    </div>
  );
}