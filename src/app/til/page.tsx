import { getAllTILs } from '~/contentlayer';
import { fetchPages } from '~/notion';
import { messages } from '~/config';
import TILsList from './TILsLIst';

const allTILs = getAllTILs();

export default async function TodayILearnedPage() {
  const allTillsNotion = (await fetchPages()).map((page) => ({
    ...page,
    category: page.tags[0],
    categorySlug: page.tags[0],
  }));

  return (
    <main className="container mt-16">
      <div className="prose prose-page mb-12 text-center dark:prose-invert">
        <h2 className="mb-4 text-center text-5xl leading-[64px]">{messages.til.title}</h2>
        <p className="text-sm">{messages.til.description}</p>
      </div>
      <TILsList allTILs={allTillsNotion} emptyMessage={messages.til.emptySearch} />
    </main>
  );
}
