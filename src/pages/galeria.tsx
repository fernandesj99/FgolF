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
    <div className="min-h-screen px-6 py-12">
      <h1 className="text-4xl font-bold text-black-400 mb-6 text-center">Galeria</h1>

      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        <button
          onClick={() => setEventoSelecionado('todos')}
          className={`text-white px-4 py-2 rounded ${eventoSelecionado === 'todos' ? 'bg-gray-800 text-white' : 'bg-gray-800 hover:bg-green-800'}`}
        >
          Todos
        </button>
        <button
          onClick={() => setEventoSelecionado('open')}
          className={` text-white px-4 py-2 rounded ${eventoSelecionado === 'open' ? 'bg-gray-800 text-white' : 'bg-gray-800 hover:bg-green-800'}`}
        >
          Open Lisboa
        </button>
        <button
          onClick={() => setEventoSelecionado('porto')}
          className={`text-white px-4 py-2 rounded ${eventoSelecionado === 'porto' ? 'bg-gray-800 text-white' : 'bg-gray-800 hover:bg-green-800'}`}
        >
          Porto Masters
        </button>
        <button
          onClick={() => setEventoSelecionado('algarve')}
          className={`text-white px-4 py-2 rounded ${eventoSelecionado === 'algarve' ? 'bg-gray-800 text-white' : 'bg-gray-800 hover:bg-green-800'}`}
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