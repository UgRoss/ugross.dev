import { TIL } from 'contentlayer/generated';
import { TILPreviewItem } from './TILPreviewItem';

interface TILsListProps {
  emptyMessage: string;
  items: TIL[];
}

export function TILsList({ emptyMessage, items }: TILsListProps) {
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
