import '../styles/globals.css';
import Link from 'next/link';

export default function App({ Component, pageProps }: any) {
  return (
    <>
      <nav className="bg-black text-white px-6 py-4 border-b border-gray-800 sticky top-0 z-50">
        <ul className="flex gap-6 text-lg font-semibold">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/eventos">Eventos</Link></li>
          <li><Link href="/jogadores">Jogadores</Link></li>
          <li><Link href="/noticias">Notícias</Link></li>
        </ul>
      </nav>
      <Component {...pageProps} />
    </>
  );
}