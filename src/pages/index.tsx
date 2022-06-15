import type { GetStaticProps, NextPage } from 'next';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { HeroProfile } from '~/components/HeroProfile';
import { SEO } from '~/components/SEO';
import { getPageBySlug, getProfileDetails } from '~/lib/graphcms';
import { GetAuthorByIdQuery, GetPageBySlugQuery } from '~/types/graphql';
import { generateRssFeed } from '~/lib/rss';

interface HomePageProps {
  mdxSourceContent: MDXRemoteSerializeResult;
  seo: NonNullable<GetPageBySlugQuery['page']>['seo'];
  profile: NonNullable<GetAuthorByIdQuery['author']>;
}

const Home: NextPage<HomePageProps> = ({ mdxSourceContent, seo, profile }) => {
  const { title = '', description, image, keywords } = seo || {};
  const { name, jobTitle, picture } = profile;

  return (
    <>
      <SEO title={title} description={description} image={image} keywords={keywords} />

      <main>
        <HeroProfile imgUrl={picture?.url ?? ''} name={name} jobTitle={jobTitle} />

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
  await generateRssFeed();
  const { content = '', seo = {} } = (await getPageBySlug('index-page')) ?? {};
  const profile = await getProfileDetails();
  const mdxSourceContent = await serialize(content);

  return {
    props: { mdxSourceContent, seo, profile },
  };
};

export default Home;
