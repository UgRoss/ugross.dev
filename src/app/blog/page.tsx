import { getAllPosts } from '~/contentlayer';
import { ArticleCard } from '~/components/ArticleCard';

const allArticles = getAllPosts();

export default function BlogPage() {
  return (
    <main className="container mt-16">
      <div className="prose prose-page mb-12 text-center dark:prose-invert">
        <h2 className="mb-4 text-center text-5xl leading-[64px]">Blog</h2>
        <p className="text-sm">I write about JavaScript, TypeScript, React, Algorithms and more.</p>
      </div>
      <div className="mt-10 flex flex-col gap-5">
        {allArticles.map((article) => (
          <ArticleCard
            key={article.slug}
            url={`/blog/${article.slug}`}
            title={article.title}
            description={article.description}
            tags={article.tags?.map((tag) => ({ title: tag, href: `#${tag}` })) ?? []}
            imageSrc={article.img || '/storybook/article-image-demo.avif'}
          />
        ))}
      </div>
    </main>
  );
}
