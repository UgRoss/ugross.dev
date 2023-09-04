import { ArticleCard } from '~/components/ArticleCard';
import { getAllPostsFromNotion } from '~/services/posts';

export default async function BlogPage() {
  const allPosts = await getAllPostsFromNotion();

  return (
    <main className="container mt-16">
      <div className="prose prose-page mb-12 text-center dark:prose-invert">
        <h2 className="mb-4 text-center text-5xl leading-[64px]">Blog</h2>
        <p className="text-sm">I write about JavaScript, TypeScript, React, Algorithms and more.</p>
      </div>
      <div className="mt-10 flex flex-col gap-5">
        {allPosts.map((article) => (
          <ArticleCard
            description={article.description}
            imageSrc={article.img || '/storybook/article-image-demo.avif'}
            key={article.slug}
            tags={article.tags?.map((tag) => ({ href: `#${tag}`, title: tag })) ?? []}
            title={article.title}
            url={`/blog/${article.slug}`}
          />
        ))}
      </div>
    </main>
  );
}
