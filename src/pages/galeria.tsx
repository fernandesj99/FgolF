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

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      <h1 className="text-4xl font-bold text-lime-400 mb-6 text-center">Galeria</h1>

      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        <button
          onClick={() => setEventoSelecionado('todos')}
          className={`px-4 py-2 rounded ${eventoSelecionado === 'todos' ? 'bg-lime-500 text-black' : 'bg-gray-700 hover:bg-gray-600'}`}
        >
          Todos
        </button>
        <button
          onClick={() => setEventoSelecionado('open')}
          className={`px-4 py-2 rounded ${eventoSelecionado === 'open' ? 'bg-lime-500 text-black' : 'bg-gray-700 hover:bg-gray-600'}`}
        >
          Open Lisboa
        </button>
        <button
          onClick={() => setEventoSelecionado('porto')}
          className={`px-4 py-2 rounded ${eventoSelecionado === 'porto' ? 'bg-lime-500 text-black' : 'bg-gray-700 hover:bg-gray-600'}`}
        >
          Porto Masters
        </button>
        <button
          onClick={() => setEventoSelecionado('algarve')}
          className={`px-4 py-2 rounded ${eventoSelecionado === 'algarve' ? 'bg-lime-500 text-black' : 'bg-gray-700 hover:bg-gray-600'}`}
        >
          Algarve Challenge
        </button>
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
    </div>
  );
}