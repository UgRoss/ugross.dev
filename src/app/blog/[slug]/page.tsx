import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import { getPostBySlugFromNotion } from '~/services/posts';

export default async function Page({ params }: { params: { slug: string } }) {
  const post = await getPostBySlugFromNotion(params.slug);
  if (!post) notFound();

  return (
    <main className="container">
      <ReactMarkdown>{post.markdown}</ReactMarkdown>
    </main>
  );
}
