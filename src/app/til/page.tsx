import { allTILs } from 'contentlayer/generated';
import { compareByDate } from '~/app/utils';
import { messages } from '~/config';
import TILsList from './TILsLIst';

export default async function TodayILearnedPage() {
  const allTILsSorted = allTILs.sort(compareByDate);

  return (
    <main className="container mt-16">
      <div className="prose prose-page mb-12 text-center dark:prose-invert">
        <h2 className="mb-4 text-center text-5xl leading-[64px]">{messages.til.title}</h2>
        <p className="text-sm">{messages.til.description}</p>
      </div>
      <TILsList allTILs={allTILsSorted} emptyMessage={messages.til.emptySearch} />
    </main>
  );
}
