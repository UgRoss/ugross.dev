import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArticleMetaLine } from '~/components/ArticleMetaLine';
import { Link } from '~/components/Link';
import { ArrowLeft } from '~/components/PhosphorIcons';
import { ReactMarkdown } from '~/components/ReactMarkdown';
import { siteConfig } from '~/config';
import { getPostBySlugFromNotion } from '~/services/posts';

export default async function Page({ params }: { params: { slug: string } }) {
  const post = await getPostBySlugFromNotion(params.slug);
  if (!post) notFound();

  return (
    <main className="container mt-16">
      <div className="mb-8">
        <Link className="text-sm" href="/blog" startIcon={ArrowLeft} withUnderline={false}>
          All articles
        </Link>
      </div>
      <div>
        <h1 className="text-3xl font-extrabold">Data Structures: Linked List</h1>
      </div>
      <div className="mt-8">
        <ArticleMetaLine
          author={{ image: siteConfig.avatarUrl, name: 'Rostyslav Ugryniuk' }}
          date={post.date}
          lastUpdateDate={post.lastUpdateDate}
        />
      </div>
      <div className="relative mt-8 h-36 w-full overflow-hidden rounded-lg sm:h-52 md:h-96">
        {post.img && (
          <Image alt={post.title} className=" object-cover" fill priority src={post.img} />
        )}
      </div>
      <div className="prose mt-8 dark:prose-invert">
        <ReactMarkdown>{post.markdown}</ReactMarkdown>
      </div>
    </main>
  );
}
