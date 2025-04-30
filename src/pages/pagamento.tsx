import { useRouter } from 'next/router';
import { eventos } from '../data/eventos';

export default function Pagamento() {
  const router = useRouter();
  const { evento: slug } = router.query;

  const evento = eventos.find(e => e.slug === slug);

  if (!slug) {
    return <div className="min-h-screen bg-white text-black flex items-center justify-center">A processar inscrição...</div>;
  }

  if (!evento) {
    return <div className="min-h-screen bg-white text-black flex items-center justify-center">Evento não encontrado.</div>;
  }

  return (
    <div className="min-h-screen bg-white text-black px-6 py-12">
      <div className="max-w-xl mx-auto bg-100 p-8 rounded shadow-lg text-center">
        <h1 className="text-3xl font-bold text-black mb-6">Inscrição recebida!</h1>

        <p className="mb-4">Obrigado por te inscreveres no <strong className="text-green-700">{evento.nome}</strong>.</p>
        <p className="mb-4">Data: {evento.data} | Hora: {evento.hora}</p>
        <p className="mb-4">Local: {evento.local}</p>

        <div className="bg-gray-100 p-4 rounded mb-6 text-left">
          <p className="mb-2"><strong>Valor a pagar:</strong> {evento.preco}</p>

          <p className="mb-2"><strong>IBAN:</strong><br />PT50 0000 0000 0000 0000 0000 0</p>

          <p className="mb-2"><strong>MB WAY:</strong><br />939 337 492</p>

          <p className="text-sm text-gray-400 mt-2">Por favor, inclui o teu nome no descritivo da transferência.</p>
        </div>

        <p className="text-gray-500 text-sm mb-6">Após o pagamento, receberás um email de confirmação.</p>

        <a href="/" className="inline-block bg-black hover:bg-black text-white font-semibold py-2 px-6 rounded transition">
          Voltar à página inicial
        </a>
      </div>
    </div>
  );
}