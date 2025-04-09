export default function Pagamento() {
    return (
      <div className="min-h-screen bg-black text-white px-6 py-12">
        <h1 className="text-4xl font-bold text-lime-400 text-center mb-8">Pagamento</h1>
  
        <div className="max-w-xl mx-auto bg-blue-900 p-6 rounded text-center">
          <p className="text-lg mb-6 text-gray-300">
            A sua inscrição foi recebida com sucesso.
          </p>
  
          <p className="text-lime-300 font-semibold mb-2">Valor da inscrição: 25€</p>
  
          <p className="text-gray-300 mb-1">IBAN: <span className="font-mono">PT50 0000 0000 0000 0000 0000</span></p>
          <p className="text-gray-300 mb-6">MBWay: <span className="font-mono">939 337 492</span></p>
          
          <p className="text-sm text-gray-400">Após o pagamento, receberá confirmação por e-mail.</p>
        </div>
      </div>
    );
  }