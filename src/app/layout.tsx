import { ReactNode } from 'react';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Footer } from '~/components/Footer';
import { Header } from '~/components/Header';
import { DEFAULT_META, siteConfig } from '~/config';
import '../styles/index.css';
import Providers from './Providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  description: DEFAULT_META.description,
  title: {
    default: DEFAULT_META.title,
    template: DEFAULT_META.template,
  },
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
