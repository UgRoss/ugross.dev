import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { serialize } from 'next-mdx-remote/serialize';
import { Hero } from '~/components/Hero';
import { PostPreview } from '~/components/PostPreview';
import { getAllUniqueTags, getPostsByTag } from '~/lib/graphcms';
import { useRouter } from 'next/router';
import { GetPostsByTagQuery } from '~/types/graphql';
import { SEO } from '~/components/SEO';
import { siteConfig } from '~/configs/site.config';
import { ParsedUrlQuery } from 'querystring';

interface TagNamePageProps {
  posts: GetPostsByTagQuery['posts'];
}

const TagNamePage: NextPage<NextPage & TagNamePageProps> = ({ posts }) => {
  const { query: { tagName = '' } = {} } = useRouter();
  const pageTitle = `Posts tagged: ${tagName} | ${siteConfig.name}`;
  const totalCount = posts.length;

  return (
    <>
      <SEO title={pageTitle} />

      <main>
        <Hero>
          <div className="container text-center">
            <h1 className="mt-0 text-4xl font-bold">
              <span className="text-subdued">Posts tagged: </span>
              <span className="dark:text-tertiary-dark text-tertiary">{tagName}</span>
            </h1>
            <p className="mt-5 text-xl text-subdued">
              {totalCount} {totalCount === 1 ? 'post' : 'posts'} found.
            </p>
          </div>
        </Hero>
        <div className="container">
          {posts.map(({ excerpt, title, slug }) => (
            <PostPreview excerpt={excerpt} title={title} url={`/blog/${slug}`} key={slug} />
          ))}
        </div>
      </main>
    </>
  );
};

interface PageParams extends ParsedUrlQuery {
  tagName: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { tagName } = context.params as PageParams;

  const blogPostsByTag = await getPostsByTag(tagName);
  const blogPostsByTagParsed = await Promise.all(
    blogPostsByTag.map(async (blogPost) => ({
      ...blogPost,
      content: await serialize(blogPost.content),
    }))
  );

  return {
    props: {
      posts: blogPostsByTagParsed,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allUniqueTags = await getAllUniqueTags();
  const paths = allUniqueTags?.map((tagName) => ({ params: { tagName } })) ?? [];

  return { paths, fallback: false };
};

export default TagNamePage;
