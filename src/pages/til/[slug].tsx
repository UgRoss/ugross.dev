import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import ErrorPage from 'next/error';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { SEO } from '~/components/SEO';
import { BlogPost } from '~/components/BlogPost';
import { formatDate, serializeMDX } from '~/utils';
import { getAllPosts, getAllTils, getPostBySlug, getTilBySlug } from '~/lib/graphcms';
import { ParsedUrlQuery } from 'querystring';
import { Til } from '~/types/graphql';

interface TILPostPageProps {
  til: Til & { mdxSourceContent: MDXRemoteSerializeResult };
}

const TILPostPage: NextPage<TILPostPageProps> = ({ til }) => {
  if (!til) {
    return <ErrorPage statusCode={404} />;
  }

  const displayDate = formatDate(til.date);
  const categories =
    til.categories?.map((tagName) => ({ name: tagName, url: `/til/${tagName}` })) ?? [];

  return (
    <>
      <SEO title={til.title} description={''} slug={til.slug} image={til.seo?.image} />

      <main>
        <BlogPost
          title={til.title}
          tags={categories}
          pubDate={til.date}
          date={displayDate}
          mdxSourceContent={til.mdxSourceContent}
          author={til.author?.name}
          authorLink={til.author?.url}
          coverImage={undefined}
        />
      </main>
    </>
  );
};

interface PageParams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as PageParams;
  const data = await getTilBySlug(slug);
  const content = data?.content ?? '';
  const mdxSourceContent = await serializeMDX(content);
  const til = data ? { ...data, mdxSourceContent } : null;

  return { props: { til } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allTils = await getAllTils();
  const paths = allTils.map(({ slug }) => ({ params: { slug } }));

  return { paths, fallback: false };
};

export default TILPostPage;
