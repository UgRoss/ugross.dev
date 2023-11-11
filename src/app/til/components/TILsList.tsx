import { TIL } from 'contentlayer/generated';
import { messagesConfig } from '~/config';
import { TILPreviewItem } from './TILPreviewItem';

interface TILsListProps {
  emptyMessage?: string;
  items: TIL[];
}

export function TILsList({
  emptyMessage = messagesConfig.til.noItems,
  items,
}: Readonly<TILsListProps>) {
  const isEmpty = items.length === 0;

  return (
    <div className="flex flex-col gap-5">
      <ul className="animated-list">
        {isEmpty && <p className="text-center text-muted">{emptyMessage}</p>}
        {items.map(({ slug, tags, title }) => (
          <TILPreviewItem href={`/til/${slug}`} key={slug} tags={tags} title={title} />
        ))}
      </ul>
    </div>
  );
}
