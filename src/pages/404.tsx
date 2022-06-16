import type { GetStaticProps, NextPageWithLayout } from 'next';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { Layout } from '~/components/Layout';
import { SEO } from '~/components/SEO';
import { ReactElement } from 'react';
import { getPageBySlug } from '~/lib/graphcms';

interface NotFoundPageProps {
  mdxSourceContent: MDXRemoteSerializeResult;
}

const NotFoundPage: NextPageWithLayout<NotFoundPageProps> = ({ mdxSourceContent }) => {
  return (
    <Layout showHeader={false} showFooter={false}>
      <SEO title="404: The page could not be found" noIndex />
      <div className="text-center flex flex-col items-center justify-center h-screen">
        <div className="prose dark:prose-invert dark:prose-dark max-w-none">
          <MDXRemote {...mdxSourceContent} />
        </div>
      </div>
    </Layout>
  );
};

NotFoundPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout showFooter={false} showHeader={false} showCommandPalette={false}>
      {page}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { content = '' } = (await getPageBySlug('not-found')) ?? {};
  const mdxSourceContent = await serialize(content);

  return {
    props: {
      mdxSourceContent,
    },
  };
};

export default NotFoundPage;
