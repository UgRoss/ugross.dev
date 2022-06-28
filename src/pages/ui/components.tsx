import type { GetStaticProps, NextPage } from 'next';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { getPageBySlug } from '~/lib/graphcms';
import { SEO } from '~/components/SEO';

interface ComponentsTestPageProps {
  mdxSourceContent: MDXRemoteSerializeResult;
}

const ComponentsTestPage: NextPage<ComponentsTestPageProps> = ({ mdxSourceContent }) => {
  return (
    <>
      <SEO title="UI Components Test Page" noIndex />

      <main className="mt-20">
        <div className="container">
          <div className="dark:prose-dark prose max-w-none dark:prose-invert">
            <MDXRemote {...mdxSourceContent} />
          </div>
        </div>
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const pageData = await getPageBySlug('components');
  const content = pageData?.content ?? '';
  const mdxSourceContent = await serialize(content);

  return { props: { mdxSourceContent } };
};

export default ComponentsTestPage;
