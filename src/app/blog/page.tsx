import { Metadata } from 'next';
import { ArticleCard } from '~/components/ArticleCard';
import { posts } from '~/services/contentfulContent';

export const metadata: Metadata = {
  description: 'I write about JavaScript, TypeScript, React, Algorithms and more.',
  openGraph: {
    images: ['/default/page.jpg'],
    siteName: 'ugross.dev',
  },
  title: 'Blog',
};

export default async function BlogPage() {
  return (
    <main className="container mt-16">
      <div className="prose prose-page mb-12 text-center dark:prose-invert">
        <h2 className="mb-4 text-center text-5xl leading-[64px]">Blog</h2>
        <p className="text-sm">I write about JavaScript, TypeScript, React, Algorithms and more.</p>
      </div>
      <div className="mt-10 flex flex-col gap-5">
        {posts.getAll().map((article) => (
          <ArticleCard
            description={article.description}
            imageSrc={article.img}
            key={article.slug}
            tags={article.tagsWithLinks}
            title={article.title}
            url={`/blog/${article.slug}`}
          />
        ))}
      </div>
    </main>
  );
}
