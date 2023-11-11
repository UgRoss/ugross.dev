import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArticleMetaLine } from '~/components/ArticleMetaLine';
import { Link } from '~/components/Link';
import { ArrowLeft } from '~/components/PhosphorIcons';
import { ReactMarkdown } from '~/components/ReactMarkdown';
import { INFO, siteConfig } from '~/config';
import { posts } from '~/services/contentfulContent';

interface Props {
  params: { slug: string };
  searchParams: string;
}

export async function generateMetadata({ params }: Readonly<Props>): Promise<Metadata> {
  const post = posts.getBySlug(params.slug);

  if (!post) {
    return {};
  }

  return {
    authors: {
      name: INFO.name,
      url: siteConfig.url,
    },
    description: post.description,
    openGraph: {
      images: [post.img],
    },
    title: post.title,
  };
}

export default async function Page({ params }: Readonly<Props>) {
  const post = posts.getBySlug(params.slug);

  if (!post) notFound();

  return (
    <main className="container mt-16">
      <div className="mb-8">
        <Link className="text-sm" href="/blog" startIcon={ArrowLeft} withUnderline={false}>
          All articles
        </Link>
      </div>
      <div>
        <h1 className="text-3xl font-extrabold">{post.title}</h1>
      </div>
      <div className="mt-8">
        <ArticleMetaLine
          author={{ image: siteConfig.avatarUrl, name: INFO.name }}
          date={post.date}
          lastUpdateDate={post.lastUpdateDate}
        />
      </div>
      <div className="relative mt-8 h-36 w-full overflow-hidden rounded-lg sm:h-52 md:h-96">
        {post.img && (
          <Image alt={post.title} className="object-cover" src={post.img} fill priority />
        )}
      </div>
      <div className="prose mt-8 dark:prose-invert relative">
        <ReactMarkdown>{post.body.raw}</ReactMarkdown>
      </div>
    </main>
  );
}
