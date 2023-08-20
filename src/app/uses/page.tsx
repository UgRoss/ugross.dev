import { notFound } from 'next/navigation';
import { ReactMarkdown } from '~/components/ReactMarkdown';
import { getUsesPageContentFromNotion } from '~/services/uses';
import { messages } from '~/config';

export default async function UsesPage() {
  const usesPage = await getUsesPageContentFromNotion();
  const { title, description } = messages.uses;

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
          <ReactMarkdown>{usesPage.markdown}</ReactMarkdown>
        </div>
      </div>
    </main>
  );
}
