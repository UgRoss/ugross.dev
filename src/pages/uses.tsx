import type { GetStaticProps, NextPage } from 'next';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { Hero } from '~/components/Hero';
import { SEO } from '~/components/SEO';
import { getPageBySlug } from '~/lib/graphcms';
import { GetPageBySlugQuery } from '~/types/graphql';

interface UsesPageProps {
  mdxSourceContent: MDXRemoteSerializeResult;
  title: NonNullable<GetPageBySlugQuery['page']>['title'];
  subtitle: NonNullable<GetPageBySlugQuery['page']>['subtitle'];
  seo: NonNullable<GetPageBySlugQuery['page']>['seo'];
}

const UsesPage: NextPage<UsesPageProps> = ({ title, subtitle, seo, mdxSourceContent }) => {
  const { title: seoTitle = '', description, image, keywords } = seo || {};

  return (
    <>
      <SEO title={seoTitle} description={description} image={image} keywords={keywords} />

      <main>
        <Hero>
          <div className="container text-center prose dark:prose-invert dark:prose-dark">
            <h1 className="text-4xl my-5 font-extrabold">{title}</h1>
            <p className="mb-0 text-md font-medium">{subtitle}</p>
          </div>
        </Hero>
        <div className="container">
          <div className="prose dark:prose-invert dark:prose-dark max-w-none">
            <MDXRemote {...mdxSourceContent} />
          </div>
        </div>
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { content = '', seo = {}, title, subtitle } = (await getPageBySlug('uses')) ?? {};
  const mdxSourceContent = await serialize(content);

  return {
    props: {
      title,
      subtitle,
      seo,
      mdxSourceContent,
    },
  };
};

export default UsesPage;
