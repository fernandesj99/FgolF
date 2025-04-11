import { useState } from 'react';
import { eventos } from '../../data/eventos';

export default function OpenLisboa() {
  const [mostrarModal, setMostrarModal] = useState(false);
  const evento = eventos.find(e => e.slug === 'open-lisboa');

  if (!evento) return <div className="text-white p-10">Evento não encontrado.</div>;

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      <h1 className="text-4xl font-bold text-lime-400 mb-4">{evento.nome}</h1>
      <p className="mb-1">Data: {evento.data}</p>
      <p className="mb-1">Hora: {evento.hora}</p>
      <p className="mb-4">Local: {evento.local}</p>

      <p className="mb-4">{evento.descricao}</p>

      <div className="bg-blue-900 p-4 rounded mb-6">
        <p><strong>Prize Pool:</strong> {evento.premio}</p>
        <p><strong>Custo de Entrada:</strong> {evento.preco}</p>
        <p><strong>Ofertas Incluídas:</strong> {evento.ofertas}</p>
        <p><strong>Patrocínios:</strong> {evento.patrocinadores.join(', ')}</p>
      </div>

      <div className="text-center">
        <button
          onClick={() => setMostrarModal(true)}
          className="bg-lime-500 text-black font-semibold py-2 px-6 rounded hover:bg-lime-400 transition"
        >
          Inscrever
        </button>
      </div>

      {mostrarModal && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="bg-white text-black rounded p-8 w-full max-w-md shadow-lg">
            <h3 className="text-xl font-bold mb-4">Inscrição no {evento.nome}</h3>

            <form
              action="https://formspree.io/f/xeoavogl"
              method="POST"
              target="_self"
              onSubmit={() => {
                setTimeout(() => {
                  window.location.href = `https://fgolf.vercel.app/pagamento?evento=${evento.slug}`;
                }, 1000);
              }}
            >
              <input type="hidden" name="evento" value={evento.nome} />

              <label className="block mb-4">
                Nome:
                <input type="text" name="nome" required className="w-full mt-1 p-2 border border-gray-300 rounded" />
              </label>
              <label className="block mb-4">
                Email:
                <input type="email" name="email" required className="w-full mt-1 p-2 border border-gray-300 rounded" />
              </label>
              <label className="block mb-4">
                Nº de Sócio:
                <input type="text" name="socio" required className="w-full mt-1 p-2 border border-gray-300 rounded" />
              </label>
              <label className="block mb-6">
                Nº de Telemóvel:
                <input type="tel" name="telemovel" required pattern="[0-9]{9}" className="w-full mt-1 p-2 border border-gray-300 rounded" />
              </label>

              <div className="flex justify-between">
                <button type="button" onClick={() => setMostrarModal(false)} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">Cancelar</button>
                <button type="submit" className="px-4 py-2 bg-lime-500 text-white font-semibold rounded hover:bg-lime-400">Confirmar</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}