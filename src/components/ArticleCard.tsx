import Image from 'next/image';
import Link from 'next/link';
import { Badge } from './Badge';

interface ArticleCardProps {
  imageSrc: string;
  title: string;
  description: string;
  tags?: { title: string; href: string }[];
}

export const ArticleCard = ({
  imageSrc,
  title,
  description,
  tags,
}: ArticleCardProps): JSX.Element => {
  const hasTags = Array.isArray(tags) && tags.length > 0;

  // TODO: convert into proper clickable card using Link
  return (
    <div className="flex cursor-pointer items-stretch rounded-lg border bg-card shadow-sm transition hover:scale-[1.01]">
      {imageSrc && (
        <div className="relative hidden w-40 flex-shrink-0 sm:flex">
          <Image src={imageSrc} alt={title} className=" rounded-l-lg object-cover" fill />
        </div>
      )}
      <div className="prose prose-page p-4">
        <h2 className="mb-2 text-lg font-bold text-heading">{title}</h2>
        <p className="line-clamp-3 text-sm">{description}</p>
        {hasTags && (
          <div className="mt-4">
            {tags.map(({ title, href }) => (
              <Badge key={title} variant="secondary" clickable as={Link} href={href}>
                {title}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
