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
    <main className="mt-32 container flex flex-col gap-20">
      <div>
        <h2 style={pacifico.style} className="text-5xl text-center leading-[64px] mb-5">
          Blog
        </h2>
        <p className="prose text-center">
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
