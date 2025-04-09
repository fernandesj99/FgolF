export default function Jogadores() {
    return (
      <div className="min-h-screen bg-black text-white p-10">
        <h1 className="text-4xl font-bold text-lime-400 mb-8">Jogadores</h1>
  
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="bg-gray-800 p-6 rounded text-center">
            <h2 className="text-lg font-semibold text-lime-300">João Fernandes</h2>
            <p className="text-gray-300">5 vitórias</p>
          </div>
          <div className="bg-gray-800 p-6 rounded text-center">
            <h2 className="text-lg font-semibold text-lime-300">Martim Fonseca</h2>
            <p className="text-gray-300">5 vitórias</p>
          </div>
          <div className="bg-gray-800 p-6 rounded text-center">
            <h2 className="text-lg font-semibold text-lime-300">António Puerta</h2>
            <p className="text-gray-300">3 vitórias</p>
          </div>
        </div>
      </div>
    );
  }