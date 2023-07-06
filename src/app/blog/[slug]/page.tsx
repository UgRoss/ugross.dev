import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getPostBySlugFromNotion } from '~/services/posts';
import { ReactMarkdown } from '~/components/ReactMarkdown';
import { Link } from '~/components/Link';
import { ArrowLeft } from '~/components/PhosphorIcons';
import { ArticleMetaLine } from '~/components/ArticleMetaLine';
import { siteConfig } from '~/config';

export default async function Page({ params }: { params: { slug: string } }) {
  const post = await getPostBySlugFromNotion(params.slug);
  if (!post) notFound();

  return (
    <main className="container mt-16">
      <div className="mb-8">
        <Link href="/til" startIcon={ArrowLeft} withUnderline={false} className="text-sm">
          All articles
        </Link>
      </div>
      <div>
        <h1 className="text-3xl font-extrabold">Data Structures: Linked List</h1>
      </div>
      <div className="mt-8">
        <ArticleMetaLine
          author={{ name: 'Rostyslav Ugryniuk', image: siteConfig.avatarUrl }}
          date={post.date}
          lastUpdateDate={post.lastUpdateDate}
        />
      </div>
      <div className="relative mt-8 h-36 w-full overflow-hidden rounded-lg sm:h-52 md:h-96">
        {post.img && (
          <Image src={post.img} alt={post.title} className=" object-cover" fill priority />
        )}
      </div>
      <div className="prose mt-8 dark:prose-invert">
        <ReactMarkdown>{post.markdown}</ReactMarkdown>
      </div>
    </main>
  );
}
