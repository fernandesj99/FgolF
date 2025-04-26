export default function AlgarveChallengeResultado() {
    return (
      <div className="min-h-screen bg-black text-white px-6 py-12">
        <h1 className="text-4xl font-bold text-lime-400 mb-4">Algarve Challenge</h1>
        <p className="mb-1">Data: 26 de Julho de 2025</p>
        <p className="mb-1">Hora: 10h00</p>
        <p className="mb-4">Local: Vilamoura Golf Resort</p>
  
        <p className="mb-4">
          O Algarve Challenge encerrou a primavera do circuito com uma etapa solarenga no sul. Um campo técnico e paisagens incríveis garantiram emoção até ao fim.
        </p>
  
        <div className="bg-blue-900 p-4 rounded mb-6">
          <p><strong>Prize Pool:</strong> 12.500€</p>
          <p><strong>Custo de Entrada:</strong> 35€</p>
          <p><strong>Ofertas Incluídas:</strong> Polo oficial FgolF, snacks energéticos, vouchers</p>
          <p><strong>Patrocínios:</strong> Galp, Callaway, Delta Cafés</p>
        </div>
  
        <div className="bg-blue-900 p-4 rounded mb-6">
          <p><strong>Classificação Final:</strong></p>
          <ul className="list-disc ml-6 mt-2">
            <li>1º Martim Fonseca – 67 (-5)</li>
            <li>2º António Puerta – 69 (-3)</li>
            <li>3º João Fernandes – 70 (-2)</li>
          </ul>
        </div>
  
        <div className="mt-6 text-center">
          <a
            href="/docs/algarve-challenge-resultados.pdf"
            target="_blank"
            className="text-lime-400 underline"
          >
            Ver resultados em PDF
          </a>
        </div>
      </div>
    );
  }