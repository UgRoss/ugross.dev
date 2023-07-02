import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import { Link } from '~/components/Link';
import { ArrowLeft } from '~/components/PhosphorIcons';
import { getTILBySlugFromNotion } from '~/services/tils';

export default async function Page({ params }: { params: { slug: string } }) {
  const post = await getTILBySlugFromNotion(params.slug);
  if (!post) notFound();

  return (
    <main className="container mt-16">
      <div className="mb-4">
        <Link href="/til" startIcon={ArrowLeft} withUnderline={false}>
          All TILs
        </Link>
      </div>
      <div className="prose prose-page mb-12 text-center dark:prose-invert">
        <h1 className="mb-4 text-center text-5xl leading-[64px]">{post.title}</h1>
      </div>
      <div className="prose dark:prose-invert">
        <ReactMarkdown>{post.markdown}</ReactMarkdown>
        {/* <div dangerouslySetInnerHTML={{ __html: html }} /> */}
      </div>
    </main>
  );
}
