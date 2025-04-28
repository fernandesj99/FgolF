import { useState } from 'react';
import Image from 'next/image';

export default function Galeria() {
  const [eventoSelecionado, setEventoSelecionado] = useState('todos');

  const todasImagens = [
    { src: '/galeria/open1.jpg', evento: 'open' },
    { src: '/galeria/open2.jpg', evento: 'open' },
    { src: '/galeria/porto1.jpg', evento: 'porto' },
    { src: '/galeria/porto2.jpg', evento: 'porto' },
    { src: '/galeria/algarve1.jpg', evento: 'algarve' },
  ];

  const imagensFiltradas = eventoSelecionado === 'todos'
    ? todasImagens
    : todasImagens.filter(img => img.evento === eventoSelecionado);

  const voltarAoTopo = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white px-6 py-12 relative">
      <h1 className="text-4xl font-bold text-black mb-6 text-center">Galeria</h1>

      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        {['todos', 'open', 'porto', 'algarve'].map(evento => (
          <button
            key={evento}
            onClick={() => setEventoSelecionado(evento)}
            className={`px-4 py-2 rounded text-white font-semibold transition ${
              eventoSelecionado === evento ? 'bg-green-800' : 'bg-gray-800 hover:bg-green-700'
            }`}
          >
            {evento === 'todos' ? 'Todos' :
             evento === 'open' ? 'Open Lisboa' :
             evento === 'porto' ? 'Porto Masters' :
             'Algarve Challenge'}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {imagensFiltradas.map((img, idx) => (
          <div key={idx} className="relative group overflow-hidden rounded shadow-lg">
            <Image
              src={img.src}
              alt={`Imagem ${idx + 1}`}
              width={600}
              height={400}
              className="object-cover w-full h-full transform group-hover:scale-105 transition duration-300"
            />
          </div>
        ))}
      </div>

      {/* Botão "Voltar ao Topo" */}
      <button
        onClick={voltarAoTopo}
        className="fixed bottom-6 right-6 bg-green-700 text-white font-bold px-4 py-2 rounded-full hover:bg-green-700 transition"
      >
      Voltar ao Topo
      </button>
    </div>
  );
}