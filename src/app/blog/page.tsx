import Image from 'next/image';
import { Pacifico } from '@next/font/google';
import { getAllPosts } from '@/lib/posts';
import ArticlePreview from '@/components/ArticlePreview';

const pacifico = Pacifico({
  weight: ['400'],
  subsets: ['latin'],
});
export default function Blog() {
  const articles = getAllPosts();

  return (
    <main className="container mt-32 flex flex-col gap-20">
      <div className="prose text-center dark:prose-invert">
        <h2 style={pacifico.style} className="mb-8 text-center text-5xl leading-[64px]">
          Blog
        </h2>
        <p>
          Writing about frontend development, React, Chakra UI, UI design, SaaS, and indie hacking.
          Here are some of the most recent thoughts, learnings.
        </p>
      </div>
      <section className="flex flex-col gap-10">
        {articles.map(({ title, description, url }) => (
          <ArticlePreview key={url} title={title} description={description} link={url} />
        ))}
      </section>
    </main>
  );
}
