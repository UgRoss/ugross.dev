import { Pacifico } from '@next/font/google';
import { Button } from '@/ui/Button';
import ArticlePreview from '@/components/ArticlePreview';
import { getRecentPosts, getRecentTILs } from '@/lib/posts';
import Link from 'next/link';
import { TilPreview } from '@/components/TilPreview';
import { Avatar } from '@/ui/Avatar';
import { Prose } from '@/components/Prose';

const pacifico = Pacifico({
  weight: ['400'],
  subsets: ['latin'],
});

export default function Home() {
  const recentPosts = getRecentPosts(2);
  const recentTILs = getRecentTILs(4);

  return (
    <main className="container mt-32 flex flex-col gap-20">
      <section>
        <Avatar size="lg" className="mb-6" initials="RU" imgUrl="/memoji-avatar.png" status="🎉" />
        <Prose>
          <h1
            style={pacifico.style}
            className="sm:tracking-wide"
          >{`Hi, I'm Rostyslav Ugryniuk`}</h1>
          <p>
            {`I'm a software developer who creates open-source projects. I like accordions, board games, and stand-up comedy.`}
            <br />
            <br />
            {`This is my digital garden. 🌱`}
          </p>
        </Prose>
      </section>
      <section className="grid gap-8">
        <h2 className="text-xl font-bold leading-7 text-black dark:text-white">✍️ Articles</h2>
        <div className="grid gap-8">
          {recentPosts.map(({ title, description, url }) => (
            <ArticlePreview key={url} title={title} description={description} link={url} />
          ))}
        </div>
        <Button as={Link} href="/blog" className="w-full" variant="outline" size="sm">
          View All
        </Button>
      </section>
      <section className="grid gap-8">
        <h2 className="text-xl font-bold leading-7 text-black dark:text-white">
          🧠 Today I Learned
        </h2>
        <div className="gid gap-8">
          {recentTILs.map(({ title, emoji, url, date, tags }) => (
            <TilPreview key={url} title={title} emoji={emoji} url={url} tags={tags} date={date} />
          ))}
        </div>
        <Button as={Link} href="/til" className="w-full" variant="outline" size="sm">
          View All
        </Button>
      </section>
    </main>
  );
}
