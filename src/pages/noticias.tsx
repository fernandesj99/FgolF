export default function Noticias() {
  const noticias = [
    {
      titulo: "Novo circuito anunciado para o verão",
      descricao: "A temporada de verão trará novos campos e desafios aos jogadores do FgolF.",
      data: "07 de Abril de 2025",
    },
    {
      titulo: "João Fernandes lidera o ranking nacional",
      descricao: "Após 5 vitórias consecutivas, João assume o topo do ranking.",
      data: "02 de Abril de 2025",
    },
    {
      titulo: "Parceria com a Federação Portuguesa de Golfe",
      descricao: "FgolF anuncia apoio oficial e novas oportunidades para sócios federados.",
      data: "28 de Março de 2025",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      <h1 className="text-4xl font-bold text-lime-400 text-center mb-12">Notícias</h1>

      <div className="max-w-5xl mx-auto grid gap-8">
        {noticias.map((noticia, idx) => (
          <div
            key={idx}
            className="bg-blue-900 p-6 rounded shadow hover:bg-blue-800 transition"
          >
            <h2 className="text-2xl font-semibold text-lime-300 mb-2">{noticia.titulo}</h2>
            <p className="text-gray-300">{noticia.descricao}</p>
            <p className="mt-2 text-sm text-gray-500">{noticia.data}</p>
          </div>
        ))}
      </div>
    </div>
  );
}