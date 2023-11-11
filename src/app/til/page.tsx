import { Metadata } from 'next';
import { messagesConfig } from '~/config';
import { tilPosts } from '~/services/contentfulContent';
import { TILsListWithSearch } from './components/TILsListWithSearch';

export const metadata: Metadata = {
  description: messagesConfig.til.description,
  openGraph: {
    images: ['/default/page.jpg'],
  },
  title: messagesConfig.til.title,
};

interface Props {
  searchParams: { tag?: string };
}

export default async function TodayILearnedPage({ searchParams }: Readonly<Props>) {
  const tag = searchParams.tag;
  const allTILsData = tag ? tilPosts.getByTag(tag) : tilPosts.getAll();

  return (
    <main className="container mt-16">
      <div className="prose prose-page mb-12 text-center dark:prose-invert">
        <h2 className="mb-4 text-center text-5xl leading-[64px]">{messagesConfig.til.title}</h2>
        <p className="text-sm">{messagesConfig.til.description}</p>
      </div>
      <TILsListWithSearch allTILs={allTILsData} emptyMessage={messagesConfig.til.emptySearch} />
    </main>
  );
}
