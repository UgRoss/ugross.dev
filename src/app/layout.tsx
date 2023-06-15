import '../styles/index.css';
import { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import { Header } from '~/components/Header';
import { Footer } from '~/components/Footer';
import Providers from './Providers';
import { siteConfig, DEFAULT_META } from '~/config';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: DEFAULT_META.title,
  description: DEFAULT_META.description,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const { language, footer } = siteConfig;

  return (
    <html lang={language} className={inter.className}>
      <body>
        <Providers>
          <Header />
          {children}
          <Footer copyright={footer.copyright} links={footer.links} />
        </Providers>
      </body>
    </html>
  );
}
