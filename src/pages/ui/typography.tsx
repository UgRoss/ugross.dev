import type { GetStaticProps, NextPage } from 'next';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { getPageBySlug } from '~/lib/graphcms';
import { SEO } from '~/components/SEO';

interface HomePageProps {
  mdxSourceContent: MDXRemoteSerializeResult;
}

const Home: NextPage<HomePageProps> = ({ mdxSourceContent }) => {
  return (
    <>
      <SEO title="Typography Page" noIndex />

      <main className="mt-20">
        <div className="container">
          <div className="prose dark:prose-invert max-w-none">
            <MDXRemote {...mdxSourceContent} />
          </div>
        </div>
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const pageData = await getPageBySlug('typography');
  const content = pageData?.content ?? '';
  const mdxSourceContent = await serialize(content);

  return {
    props: {
      mdxSourceContent,
    },
  };
};

export default Home;
