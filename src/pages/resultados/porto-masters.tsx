export default function PortoMastersResultado() {
    return (
      <div className="min-h-screen bg-black text-white px-6 py-12">
        <h1 className="text-4xl font-bold text-lime-400 mb-4">Porto Masters</h1>
        <p className="mb-1">Data: 28 de Junho de 2025</p>
        <p className="mb-1">Hora: 14h00</p>
        <p className="mb-4">Local: Campo de Golfe de Espinho</p>
  
        <p className="mb-4">
          O Porto Masters é um dos torneios mais prestigiados da temporada, reunindo jogadores nacionais e internacionais num palco clássico do golfe em Portugal.
        </p>
  
        <div className="bg-blue-900 p-4 rounded mb-6">
          <p><strong>Prize Pool:</strong> 10.000€</p>
          <p><strong>Custo de Entrada:</strong> 30€</p>
          <p><strong>Ofertas Incluídas:</strong> Welcome pack, bolas oficiais, bebida de boas-vindas</p>
          <p><strong>Patrocínios:</strong> Super Bock, Nike Golf, BPI</p>
        </div>
  
        <div className="bg-blue-900 p-4 rounded mb-6">
          <p><strong>Classificação Final:</strong></p>
          <ul className="list-disc ml-6 mt-2">
            <li>1º António Puerta – 69 (-3)</li>
            <li>2º João Fernandes – 70 (-2)</li>
            <li>3º Martim Fonseca – 72 (Par)</li>
          </ul>
        </div>
  
        <div className="mt-6 text-center">
          <a
            href="/docs/porto-masters-resultados.pdf"
            target="_blank"
            className="text-lime-400 underline"
          >
            Ver resultados em PDF
          </a>
        </div>
      </div>
    );
  }