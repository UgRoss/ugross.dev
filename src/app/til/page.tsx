import Image from 'next/image';
import { Pacifico } from '@next/font/google';
import { getAllPosts, getAllTILs } from '@/lib/posts';
import ArticlePreview from '@/components/ArticlePreview';
import { TilPreview } from '@/components/TilPreview';

const pacifico = Pacifico({
  weight: ['400'],
  subsets: ['latin'],
});
export default function Blog() {
  const tilItems = getAllTILs();

  return (
    <main className="mt-32 container flex flex-col gap-20">
      <div>
        <h2 style={pacifico.style} className="text-5xl text-center leading-[64px] mb-5">
          Today I Learned
        </h2>
        <p className="prose text-center">
          A collection of concise write-ups on small things I learn day to day across a variety of
          languages and technologies
        </p>
      </div>
      <section className="flex flex-col gap-2">
        {tilItems.map(({ title, description, url, tags, emoji, date }) => (
          <TilPreview key={url} title={title} emoji={emoji} url={url} tags={tags} date={date} />
        ))}
      </section>
    </main>
  );
}
