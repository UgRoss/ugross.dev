import { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import { Footer } from '~/components/Footer';
import { Header } from '~/components/Header';
import { DEFAULT_META, siteConfig } from '~/config';
import '../styles/index.css';
import Providers from './Providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  description: DEFAULT_META.description,
  title: DEFAULT_META.title,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const { footer, language } = siteConfig;

  return (
    <html className={inter.className} lang={language}>
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
