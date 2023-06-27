import { notFound } from 'next/navigation';
import { fetchPageBlocks, fetchPageBySlug, notion } from '~/notion';
import bookmarkPlugin from '@notion-render/bookmark-plugin';
import { NotionRenderer } from '@notion-render/client';
import hljsPlugin from '@notion-render/hljs-plugin';
import { getPostBySlugFromNotion } from '~/services/posts';

export default async function Page({ params }: { params: { slug: string } }) {
  const post = await getPostBySlugFromNotion(params.slug);
  if (!post) notFound();

  const renderer = new NotionRenderer({ client: notion });

  renderer.use(hljsPlugin());
  renderer.use(bookmarkPlugin());

  const html = await renderer.render(...post.blocks);

  return (
    <main className="container">
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </main>
  );
}
