// components/Footer.tsx
import { FaInstagram, FaYoutube, FaXTwitter } from 'react-icons/fa6';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 px-6 py-10 text-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h4 className="text-white font-bold mb-2">Sobre</h4>
          <ul className="space-y-1">
            <li><Link href="/format">Formato</Link></li>
            <li><Link href="/parceiros">Parceiros</Link></li>
            <li><Link href="/contactos">Contactos</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-2">Legal</h4>
          <ul className="space-y-1">
            <li><Link href="/termos">Termos de Utilização</Link></li>
            <li><Link href="/privacidade">Política de Privacidade</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-2">Segue-nos</h4>
          <div className="flex space-x-4 text-lg">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-2">Aplicação</h4>
          <div className="space-y-2">
            <a href="#" className="block w-32"><img src="/appstore.svg" alt="App Store" /></a>
            <a href="#" className="block w-32"><img src="/googleplay.svg" alt="Google Play" /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-xs">
        © {new Date().getFullYear()} FgolF. Todos os direitos reservados.
      </div>
    </footer>
  );
}