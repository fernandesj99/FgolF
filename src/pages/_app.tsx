import '../styles/globals.css';
import Link from 'next/link';
import { useEffect } from 'react';

export default function App({ Component, pageProps }: any) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.shiftKey && e.key.toLowerCase() === 'a') {
        window.location.href = '/admin/login';
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  return (
    <>
      <nav className="bg-black text-white px-6 py-4 border-b border-gray-800 sticky top-0 z-50">
        <ul className="flex gap-6 text-lg font-semibold">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/eventos">Eventos</Link></li>
          <li><Link href="/jogadores">Jogadores</Link></li>
          <li><Link href="/noticias">Notícias</Link></li>
          <li><Link href="/patrocinios">Patrocínios</Link></li>
        </ul>
      </nav>
      <Component {...pageProps} />
    </>
  );
}