import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { VechaiProvider } from '@vechaiui/react';
import { vechaUITheme } from '~/configs/vechaiui.config';
import { MDXProvider } from '~/providers/MDXProvider';
import { CommandPaletteProvider } from '~/providers/commandPaletteContext';
import { Layout } from '~/components/Layout';
import '../styles/globals.css';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>);

  return (
    <MDXProvider>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
      </Head>
      <VechaiProvider theme={vechaUITheme} density="comfortable" colorScheme="cool">
        <CommandPaletteProvider>{getLayout(<Component {...pageProps} />)}</CommandPaletteProvider>
      </VechaiProvider>
    </MDXProvider>
  );
}
