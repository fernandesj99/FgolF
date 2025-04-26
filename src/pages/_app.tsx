import '../styles/globals.css';
import Link from 'next/link';
import { FaInstagram, FaYoutube, FaXTwitter } from 'react-icons/fa6';
import Footer from '../components/footer';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '600', '700'] });

export default function App({ Component, pageProps }: any) {
  return (
    <>
      <div className={`${montserrat.className} overflow-x-hidden w-full max-w-full`}>
        <nav className="bg-black text-white px-4 sm:px-6 py-4 border-b border-gray-800 sticky top-0 z-50 flex flex-wrap justify-between items-center">
          <ul className="flex flex-wrap gap-4 text-sm sm:text-lg font-semibold">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/eventos">Eventos</Link></li>
            <li><Link href="/resultados">Resultados</Link></li>
            <li><Link href="/noticias">Notícias</Link></li>
            <li><Link href="/parceiros">Parceiros</Link></li>
            <li><Link href="/galeria">Galeria</Link></li>
          </ul>

          <div className="flex gap-4 text-xl mt-4 sm:mt-0">
            <a href="https://www.instagram.com/limitlessgolfpt/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className="hover:text-lime-400 transition" />
            </a>
            <a href="https://x.com/LimitlessGolfPT" target="_blank" rel="noopener noreferrer" aria-label="X / Twitter">
              <FaXTwitter className="hover:text-lime-400 transition" />
            </a>
            <a href="https://www.youtube.com/channel/UCvP7RKs1x7wBHc2TZ_VpkWQ" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <FaYoutube className="hover:text-lime-400 transition" />
            </a>
          </div>
        </nav>

        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}