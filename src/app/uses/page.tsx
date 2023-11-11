import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ReactMarkdown } from '~/components/ReactMarkdown';
import { messagesConfig } from '~/config';
import { pages } from '~/services/contentfulContent';

export const metadata: Metadata = {
  description: messagesConfig.uses.description,
  openGraph: {
    images: ['/default/page.jpg'],
  },
  title: messagesConfig.uses.title,
};

export default async function UsesPage() {
  const usesPage = pages.getBySlug('uses');
  const { description, title } = messagesConfig.uses;

  if (!usesPage) {
    notFound();
  }

  return (
    <main className="container mt-16">
      <div className="prose prose-page mb-12 text-center dark:prose-invert">
        <h2 className="mb-4 text-center text-5xl leading-[64px]">{title}</h2>
        <p className="text-sm">{description}</p>
      </div>
      <div className="mt-8">
        <div className="prose mt-8 dark:prose-invert">
          <ReactMarkdown>{usesPage.body.raw}</ReactMarkdown>
        </div>
      </div>
    </main>
  );
}
