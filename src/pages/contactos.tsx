import { FaEnvelope } from 'react-icons/fa';

export default function Contactos() {
  return (
    <div className="min-h-screen bg-black text-white py-12">
      <div className="px-6 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-lime-400 mb-6">Contactos</h1>

        <p className="text-lg text-gray-300 mb-4">
          Para qualquer questão relacionada com os nossos eventos, torneios ou parcerias, entra em contacto connosco:
        </p>

        <div className="flex items-center gap-4 bg-gray-800 p-4 rounded shadow mt-6">
          <FaEnvelope className="text-lime-400 text-2xl" />
          <span className="text-lg">limitless.golf.pt@gmail.com</span>
        </div>

        <p className="text-sm text-gray-500 mt-10">
          Responderemos com a maior brevidade possível.
        </p>
      </div>
    </div>
  );
}