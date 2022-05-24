import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import ErrorPage from 'next/error';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { SEO } from '~/components/SEO';
import { BlogPost } from '~/components/BlogPost';
import { formatDate, serializeMDX } from '~/utils';
import { getAllPosts, getPostBySlug } from '~/lib/graphcms';
import { ParsedUrlQuery } from 'querystring';
import { GetPostBySlugQuery } from '~/types/graphql';

interface BlogPostPageProps {
  post: GetPostBySlugQuery['post'] & { mdxSourceContent: MDXRemoteSerializeResult };
}

const BlogPostPage: NextPage<BlogPostPageProps> = ({ post }) => {
  if (!post) {
    return <ErrorPage statusCode={404} />;
  }

  const displayDate = formatDate(post.date);
  const tags = post.tags?.map((tagName) => ({ name: tagName, url: `/tags/${tagName}` })) ?? [];
  const coverImage = post.coverImage
    ? {
        url: post.coverImage.url,
        width: post.coverImage.width ?? null,
        height: post.coverImage.height ?? null,
      }
    : undefined;

  return (
    <>
      <SEO title={post.title} description={''} slug={post.slug} image={post.seo?.image} />

      <main>
        <BlogPost
          title={post.title}
          tags={tags}
          pubDate={post.date}
          date={displayDate}
          mdxSourceContent={post.mdxSourceContent}
          author={post.author?.name}
          authorLink={post.author?.url}
          coverImage={coverImage}
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
  const data = await getPostBySlug(slug);
  const content = data?.content ?? '';
  const mdxSourceContent = await serializeMDX(content);
  const post = data ? { ...data, mdxSourceContent } : null;

  return { props: { post } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = await getAllPosts();
  const paths = allPosts.map(({ slug }) => ({ params: { slug } }));

  return { paths, fallback: false };
};

export default BlogPostPage;
