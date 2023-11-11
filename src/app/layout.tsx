import { ReactNode } from 'react';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Footer } from '~/components/Footer';
import { Header } from '~/components/Header';
import { messagesConfig, siteConfig } from '~/config';
import '../styles/index.css';
import Providers from './Providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  description: siteConfig.seo.defaultDescription,
  title: siteConfig.seo.title,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const { footer, language } = siteConfig;
  const { copyright } = messagesConfig;

  return (
    <html className={inter.className} lang={language}>
      <body>
        <Providers>
          <Header />
          {children}
          <Footer copyright={copyright} links={footer.links} />
        </Providers>
      </body>
    </html>
  );
}
