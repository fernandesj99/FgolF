export default function OpenLisboaResultado() {
    return (
      <div className="min-h-screen bg-black text-white px-6 py-12">
        <h1 className="text-4xl font-bold text-lime-400 mb-4">Open Lisboa</h1>
        <p className="mb-1">Data: 21 de Abril de 2025</p>
        <p className="mb-1">Hora: 11h00</p>
        <p className="mb-4">Local: Jamor</p>
  
        <p className="mb-4">
          O Open Lisboa foi o torneio inaugural do circuito Limitless Golf 2025, reunindo os melhores jogadores num desafio técnico e emocionante no Jamor.
        </p>
  
        <div className="bg-blue-900 p-4 rounded mb-6">
          <p><strong>Prize Pool:</strong> 7.500€</p>
          <p><strong>Custo de Entrada:</strong> 25€</p>
          <p><strong>Ofertas Incluídas:</strong> Kit de boas-vindas, t-shirt oficial, bebida energética</p>
          <p><strong>Patrocínios:</strong> Sagres, Adidas Golf, Santander</p>
        </div>
  
        <div className="bg-blue-900 p-4 rounded mb-6">
          <p><strong>Classificação Final:</strong></p>
          <ul className="list-disc ml-6 mt-2">
            <li>1º João Fernandes – 68 (-4)</li>
            <li>2º Martim Fonseca – 70 (-2)</li>
            <li>3º António Puerta – 71 (-1)</li>
          </ul>
        </div>
  
        <div className="mt-6 text-center">
          <a
            href="/docs/open-lisboa-resultados.pdf"
            target="_blank"
            className="text-lime-400 underline"
          >
            Ver resultados em PDF
          </a>
        </div>
      </div>
    );
  }