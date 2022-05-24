import type { GetStaticProps, NextPage } from 'next';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { HeroProfile } from '~/components/HeroProfile';
import { SEO } from '~/components/SEO';
import { siteConfig } from '~/configs/site.config';
import { getPageBySlug } from '~/lib/graphcms';
import { GetPageBySlugQuery } from '~/types/graphql';
import { generateRssFeed } from '~/lib/rss';

interface HomePageProps {
  mdxSourceContent: MDXRemoteSerializeResult;
  seo: NonNullable<GetPageBySlugQuery['page']>['seo'];
}

const Home: NextPage<HomePageProps> = ({ mdxSourceContent, seo }) => {
  const { title = '', description, image, keywords } = seo || {};

  return (
    <>
      <SEO title={title} description={description} image={image} keywords={keywords} />

      <main>
        <HeroProfile
          img={siteConfig.avatarUrl}
          name={siteConfig.name}
          jobTitle={siteConfig.jobTitle}
        />

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
  await generateRssFeed();
  const { content = '', seo = {} } = (await getPageBySlug('index-page')) ?? {};
  const mdxSourceContent = await serialize(content);

  return {
    props: { mdxSourceContent, seo },
  };
};

export default Home;
