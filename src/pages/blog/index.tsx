import type { GetStaticProps, NextPage } from 'next';
import { Hero } from '~/components/Hero';
import { PostPreview } from '~/components/PostPreview';
import { getAllPosts } from '~/lib/graphcms';
import { SEO } from '~/components/SEO';
import { siteConfig } from '~/configs/site.config';
import { GetAllPostsQuery } from '~/types/graphql';

interface BlogPageProps {
  posts: GetAllPostsQuery['posts'];
}

const BlogPage: NextPage<BlogPageProps> = ({ posts }) => {
  const pageTitle = `Blog | ${siteConfig.name}`;

  return (
    <>
      <SEO title={pageTitle} />

      <main>
        <Hero>
          <div className="container">
            <h1 className="text-center mt-0 text-4xl my-5 font-extrabold">
              <span className="font-normal">{'<'}</span>
              <span className="font-mono">Blog</span>
              <span className="font-normal">{' />'}</span>
            </h1>
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

export const getStaticProps: GetStaticProps = async () => ({
  props: {
    posts: await getAllPosts(),
  },
});

export default BlogPage;
