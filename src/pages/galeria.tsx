import { useState } from 'react';
import Image from 'next/image';

export default function Galeria() {
  const [eventoSelecionado, setEventoSelecionado] = useState('todos');

  const eventos = ['openlisboa', 'portomasters', 'algarvechallenge'];

  // Gera dinamicamente as imagens
  const gerarImagens = () => {
    let imagens: { src: string; evento: string }[] = [];

    eventos.forEach((evento) => {
      for (let i = 1; i <= 100; i++) { // até 100 imagens por evento (posso ajustar) com nome foto1.jpg, foto2.jpg, etc
        imagens.push({ src: `/galeria/${evento}/foto${i}.jpg`, evento });
      }
    });

    return imagens;
  };

  const todasImagens = gerarImagens();

  const imagensFiltradas = eventoSelecionado === 'todos'
    ? todasImagens
    : todasImagens.filter(img => img.evento === eventoSelecionado);

  return (
    <div className="min-h-screen px-6 py-12 bg-white">
      <h1 className="text-4xl font-bold text-black mb-6 text-center">Galeria</h1>

      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        <button
          onClick={() => setEventoSelecionado('todos')}
          className={`px-4 py-2 rounded ${eventoSelecionado === 'todos' ? 'bg-black text-white' : 'bg-gray-200 hover:bg-black hover:text-white'}`}
        >
          Todos
        </button>
        {eventos.map((evento) => (
          <button
            key={evento}
            onClick={() => setEventoSelecionado(evento)}
            className={`px-4 py-2 rounded capitalize ${eventoSelecionado === evento ? 'bg-black text-white' : 'bg-gray-200 hover:bg-black hover:text-white'}`}
          >
            {evento.replace('openlisboa', 'Open Lisboa').replace('portomasters', 'Porto Masters').replace('algarvechallenge', 'Algarve Challenge')}
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
              onError={(e) => (e.currentTarget.style.display = 'none')}
            />
          </div>
        ))}
      </div>
    </div>
  );
}