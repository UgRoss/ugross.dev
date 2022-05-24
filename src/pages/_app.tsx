import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { MDXProvider } from '~/providers/MDXProvider';
import { CommandPaletteProvider } from '~/providers/commandPaletteContext';
import { Layout } from '~/components/Layout';
import '../styles/globals.css';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>);

  return (
    <MDXProvider>
      <CommandPaletteProvider>{getLayout(<Component {...pageProps} />)}</CommandPaletteProvider>
    </MDXProvider>
  );
}
