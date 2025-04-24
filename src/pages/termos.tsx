// pages/termos.tsx
export default function Termos() {
    return (
      <div className="min-h-screen bg-black text-white py-12 px-4">
        <div className="max-w-5xl mx-auto bg-gray-900 p-8 rounded shadow-lg">
          <h1 className="text-3xl md:text-4xl font-bold text-lime-400 mb-6">
            Termos de Utilização
          </h1>
  
          <p className="mb-6 text-gray-300">
            Ao utilizar o website da Limitless Golf, o utilizador concorda com os seguintes termos e
            condições. Estes termos aplicam-se a todos os visitantes, utilizadores e qualquer outro
            que acedam ou utilizem o serviço.
          </p>
  
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-white mb-2">1. Uso do Website</h2>
              <p className="text-gray-400">
                Este site é destinado à divulgação de eventos desportivos, nomeadamente torneios de
                golfe. Ao inscrever-se, o utilizador compromete-se a fornecer informações verídicas e
                a respeitar todas as normas estabelecidas para cada evento.
              </p>
            </div>
  
            <div>
              <h2 className="text-xl font-semibold text-white mb-2">2. Propriedade Intelectual</h2>
              <p className="text-gray-400">
                Todos os conteúdos presentes no site são propriedade da Limitless Golf ou de parceiros
                autorizados, não podendo ser copiados, reproduzidos ou distribuídos sem autorização
                prévia.
              </p>
            </div>
  
            <div>
              <h2 className="text-xl font-semibold text-white mb-2">3. Modificações</h2>
              <p className="text-gray-400">
                Reservamo-nos o direito de modificar ou substituir estes termos a qualquer momento. A
                continuação da utilização do website após alterações constitui aceitação das mesmas.
              </p>
            </div>
          </div>
  
          <p className="mt-10 text-sm text-gray-500 italic">
            Última atualização: Abril de 2025
          </p>
        </div>
      </div>
    );
  }