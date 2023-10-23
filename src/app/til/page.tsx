import { messages } from '~/config';
import { tilPosts } from '~/services/contentfulContent';
import { TILsListWithSearch } from './components/TILsListWithSearch';

export default async function TodayILearnedPage({ searchParams }: any) {
  const tag = searchParams.tag;
  const allTILsData = tag ? tilPosts.getByTag(tag) : tilPosts.getAll();

  return (
    <main className="container mt-16">
      <div className="prose prose-page mb-12 text-center dark:prose-invert">
        <h2 className="mb-4 text-center text-5xl leading-[64px]">{messages.til.title}</h2>
        <p className="text-sm">{messages.til.description}</p>
      </div>
      <TILsListWithSearch allTILs={allTILsData} emptyMessage={messages.til.emptySearch} />
    </main>
  );
}
