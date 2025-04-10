import { useState } from 'react';

export default function OpenLisboa() {
  const [mostrarModal, setMostrarModal] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      <h1 className="text-4xl font-bold text-lime-400 mb-4">Open Lisboa</h1>
      <p className="mb-1">Data: 21 de Abril de 2025</p>
      <p className="mb-1">Hora: 11h00</p>
      <p className="mb-4">Local: Jamor</p>

      <p className="mb-4">
        O Open Lisboa é o torneio inaugural do circuito FgolF 2025, reunindo os melhores jogadores num desafio técnico e emocionante no Jamor.
      </p>

      <div className="bg-blue-900 p-4 rounded mb-6">
        <p><strong>Prize Pool:</strong> 7.500€</p>
        <p><strong>Custo de Entrada:</strong> 25€</p>
        <p><strong>Ofertas Incluídas:</strong> Kit de boas-vindas, t-shirt oficial, bebida energética</p>
        <p><strong>Patrocínios:</strong> Sagres, Adidas Golf, Santander</p>
      </div>

      <div className="text-center">
        <button
          onClick={() => setMostrarModal(true)}
          className="bg-lime-500 text-black font-semibold py-2 px-6 rounded hover:bg-lime-400 transition"
        >
          Inscrever
        </button>
      </div>

      {/* Modal de inscrição */}
      {mostrarModal && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="bg-white text-black rounded p-8 w-full max-w-md shadow-lg">
            <h3 className="text-xl font-bold mb-4">Inscrição no Open Lisboa</h3>

            <form
              action="https://formspree.io/f/xeoavogl"
              method="POST"
              target="_self"
            >
              <input type="hidden" name="_next" value="hhttps://fgolf.vercel.app/pagamento" />
              <input type="hidden" name="evento" value="Open Lisboa" />

              <label className="block mb-4">
                Nome:
                <input
                  type="text"
                  name="nome"
                  required
                  className="w-full mt-1 p-2 border border-gray-300 rounded"
                />
              </label>

              <label className="block mb-4">
                Email:
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full mt-1 p-2 border border-gray-300 rounded"
                />
              </label>

              <label className="block mb-4">
                Nº de Sócio da Federação Portuguesa de Golfe:
                <input
                  type="text"
                  name="socio"
                  required
                  className="w-full mt-1 p-2 border border-gray-300 rounded"
                />
              </label>

              <label className="block mb-6">
                Nº de Telemóvel:
                <input
                  type="tel"
                  name="telemovel"
                  required
                  pattern="[0-9]{9}"
                  title="Número de 9 dígitos"
                  className="w-full mt-1 p-2 border border-gray-300 rounded"
                />
              </label>

              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setMostrarModal(false)}
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                >
                  Cancelar
                </button>

                <button
                  type="submit"
                  className="px-4 py-2 bg-lime-500 text-white font-semibold rounded hover:bg-lime-400"
                >
                  Confirmar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}