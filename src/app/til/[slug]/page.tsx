import { notFound } from 'next/navigation';
import { fetchPageBlocks, fetchPageBySlug, notion } from '~/notion';
import bookmarkPlugin from '@notion-render/bookmark-plugin';
import { NotionRenderer } from '@notion-render/client';
import hljsPlugin from '@notion-render/hljs-plugin';
import { Link } from '~/components/Link';
import { ArrowLeft } from '~/components/PhosphorIcons';

export default async function Page({ params }: { params: { slug: string } }) {
  const post = await fetchPageBySlug(params.slug);
  if (!post) notFound();

  const blocks = await fetchPageBlocks(post.id);

  const renderer = new NotionRenderer({
    client: notion,
  });

  renderer.use(hljsPlugin());
  renderer.use(bookmarkPlugin());

  const html = await renderer.render(...blocks);

  return (
    <main className="container mt-16">
      <div className="mb-4">
        <Link href="/til" startIcon={ArrowLeft} withUnderline={false}>
          All TILs
        </Link>
      </div>
      <div className="prose prose-page mb-12 text-center dark:prose-invert">
        <h1 className="mb-4 text-center text-5xl leading-[64px]">Math.sign()</h1>
      </div>
      <div className="prose dark:prose-invert">
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </main>
  );
}
