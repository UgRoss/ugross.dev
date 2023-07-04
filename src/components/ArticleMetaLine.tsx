import { formatDateStringToShortDate } from '~/utils';
import { Avatar } from './Avatar';

interface ArticleMetaLineProps {
  author: {
    image?: string;
    name: string;
    url?: string;
  };
  date: string;
  lastUpdateDate?: string;
}

export function ArticleMetaLine({ author, date, lastUpdateDate }: ArticleMetaLineProps) {
  return (
    <div className="flex flex-wrap items-center gap-2 text-sm text-muted">
      <div className="flex items-center gap-2">
        {author.image && (
          <Avatar src={author.image} alt={author.name} className="h-6 w-6" size="sm" />
        )}
        <span className="">
          Written by <b>{author.name}</b>
        </span>
      </div>
      <span>&bull; </span>
      <span>{formatDateStringToShortDate(date)}</span>
      {lastUpdateDate && (
        <>
          <span>&bull; </span>
          <span>updated {formatDateStringToShortDate(lastUpdateDate)}</span>
        </>
      )}
    </div>
  );
}
