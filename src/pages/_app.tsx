import '../styles/globals.css';
import Link from 'next/link';
import { FaInstagram, FaYoutube, FaXTwitter } from 'react-icons/fa6';
import Footer from '../components/footer'; // <- importa o footer aqui

export default function App({ Component, pageProps }: any) {
  return (
    <>
      <nav className="bg-black text-white px-6 py-4 border-b border-gray-800 sticky top-0 z-50 flex justify-between items-center">
        {/* Menu da esquerda */}
        <ul className="flex gap-6 text-lg font-semibold">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/eventos">Eventos</Link></li>
          <li><Link href="/resultados">Resultados</Link></li>
          <li><Link href="/noticias">Notícias</Link></li>
          <li><Link href="/parceiros">Parceiros</Link></li>
          <li><Link href="/galeria">Galeria</Link></li>
        </ul>

        {/* Ícones sociais à direita */}
        <div className="flex gap-4 text-xl">
          <a
            href="https://www.instagram.com/limitlessgolfpt/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram className="hover:text-lime-400 transition" />
          </a>
          <a
            href="https://x.com/LimitlessGolfPT"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X / Twitter"
          >
            <FaXTwitter className="hover:text-lime-400 transition" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCvP7RKs1x7wBHc2TZ_VpkWQ"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <FaYoutube className="hover:text-lime-400 transition" />
          </a>
        </div>
      </nav>

      <Component {...pageProps} />

      <Footer /> {/* <- adiciona o footer aqui */}
    </>
  );
}