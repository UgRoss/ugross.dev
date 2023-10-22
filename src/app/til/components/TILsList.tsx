import { TIL } from 'contentlayer/generated';
import { messages } from '~/config';
import { TILPreviewItem } from './TILPreviewItem';

interface TILsListProps {
  emptyMessage?: string;
  readonly items: TIL[];
}

export function TILsList({ emptyMessage = messages.til.noItems, items }: TILsListProps) {
  const isEmpty = items.length === 0;

  return (
    <div className="mt-10 flex flex-col gap-5">
      <ul className="animated-list">
        {isEmpty && <p className="text-center text-muted">{emptyMessage}</p>}
        {items.map(({ slug, tags, title }) => (
          <TILPreviewItem href={`/til/${slug}`} key={slug} tags={tags} title={title} />
        ))}
      </ul>
    </div>
  );
}
