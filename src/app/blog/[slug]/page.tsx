import { notFound } from 'next/navigation';
import { getPostBySlugFromNotion } from '~/services/posts';
import ReactMarkdown from '~/components/ReactMarkdown';

export default async function Page({ params }: { params: { slug: string } }) {
  const post = await getPostBySlugFromNotion(params.slug);
  if (!post) notFound();

  return (
    <main className="container">
      <ReactMarkdown>{post.markdown}</ReactMarkdown>
    </main>
  );
}
