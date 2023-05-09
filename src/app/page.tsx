import ProfileHero from '~/components/ProfileHero';
import LatestPosts from '~/components/sections/LatestPosts';
import StackSection from '~/components/sections/StackSection';

const items = [
  { title: 'ChatGPT', description: 'AI', imgUrl: '/stack/chatgpt.png' },
  { title: 'Prisma', description: 'ORM', imgUrl: '/stack/prisma.png' },
  { title: 'VSCode', description: 'Editor', imgUrl: '/stack/vscode.webp' },
  { title: 'TailwindCSS', description: 'CSS Framework', imgUrl: '/stack/tailwindcss.webp' },
];

export default function Home() {
  return (
    <main className="pt-12">
      <ProfileHero />

      <div className="container mt-20 flex flex-col gap-10">
        <StackSection items={items} />
        <LatestPosts />
      </div>
    </main>
  );
}
