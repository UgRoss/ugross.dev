import { notFound } from 'next/navigation';
import { Link } from '~/components/Link';
import { ArrowLeft } from '~/components/PhosphorIcons';
import { ReactMarkdown } from '~/components/ReactMarkdown';
import { tilPosts } from '~/services/contentfulContent';

export default async function Page({ params }: { params: { slug: string } }) {
  const tilPost = tilPosts.getBySlug(params.slug);
  if (!tilPost) notFound();

  return (
    <main className="container mt-16">
      <div className="mb-8">
        <Link className="text-sm" href="/til" startIcon={ArrowLeft} withUnderline={false}>
          All TILs
        </Link>
      </div>
      <div className="prose prose-page mb-12 text-center dark:prose-invert">
        <h1 className="mb-4 text-center text-5xl leading-[64px]">{tilPost.title}</h1>
      </div>
      <div className="prose dark:prose-invert">
        <ReactMarkdown>{tilPost.body.raw}</ReactMarkdown>
      </div>
    </main>
  );
}
