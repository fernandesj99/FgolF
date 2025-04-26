import { FaInstagram, FaYoutube, FaXTwitter } from 'react-icons/fa6';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 px-6 py-10 text-sm">
      <div className="flex justify-center">
        <div className="max-w-4xl w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center">
          <div>
            <h4 className="text-white font-bold mb-2">Sobre</h4>
            <ul className="space-y-1">
              <li><Link href="/eventos">Eventos</Link></li>
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
            <div className="flex justify-center space-x-4 text-lg">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Logotipo central */}
      <div className="flex justify-center my-8">
        <Image
          src="/logooficial/logo.png"
          alt="Logo Limitless Golf"
          width={100}
          height={100}
          className="object-contain"
        />
      </div>

      {/* Direitos reservados */}
      <div className="border-t border-gray-700 pt-6 text-center text-xs">
        © {new Date().getFullYear()} Limitless Golf. Todos os direitos reservados.
      </div>
    </footer>
  );
}