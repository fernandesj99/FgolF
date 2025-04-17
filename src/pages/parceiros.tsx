export default function Patrocinios() {
    const patrocinadores = [
      {
        nome: "J.Lindeberg",
        descricao: "Roupa técnica oficial dos jogadores do FgolF.",
        logo: "/logos/jlindeberg.png",
      },
      {
        nome: "Tissot",
        descricao: "Marca oficial de cronometragem dos torneios.",
        logo: "/logos/tissot.png",
      },
      {
        nome: "Scalpers",
        descricao: "Estilo e conforto nos greens com a Scalpers.",
        logo: "/logos/scalpers.png",
      },
      {
        nome: "Delta Cafés",
        descricao: "Café oficial para atletas e público.",
        logo: "/logos/deltacafes.png",
      },
      {
        nome: "Super Bock",
        descricao: "Parceiro de celebração dos grandes momentos.",
        logo: "/logos/superbock.png",
      },
      {
        nome: "Mercedes-Benz",
        descricao: "Mobilidade premium nos eventos FgolF.",
        logo: "/logos/mercedes.png",
      },
    ];
  
    return (
      <div className="min-h-screen bg-black text-white px-6 py-12">
        <h1 className="text-4xl font-bold text-lime-400 text-center mb-12">Patrocínios</h1>
  
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {patrocinadores.map((p, idx) => (
            <div key={idx} className="bg-blue-900 p-6 rounded shadow flex flex-col items-center text-center hover:bg-blue-800 transition">
              <img src={p.logo} alt={p.nome} className="h-20 mb-4 object-contain" />
              <h2 className="text-2xl font-semibold text-lime-300 mb-2">{p.nome}</h2>
              <p className="text-gray-300">{p.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }