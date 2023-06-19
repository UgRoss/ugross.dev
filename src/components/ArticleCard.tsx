import Image from 'next/image';
import Link from 'next/link';
import { Badge } from './Badge';

interface ArticleCardProps {
  imageSrc: string;
  url: string;
  title: string;
  description: string;
  tags?: { title: string; href: string }[];
}

export const ArticleCard = ({
  imageSrc,
  url,
  title,
  description,
  tags,
}: ArticleCardProps): JSX.Element => {
  const hasTags = Array.isArray(tags) && tags.length > 0;

  return (
    <div className="relative flex cursor-pointer items-stretch rounded-lg border bg-card shadow-sm transition hover:scale-[1.01]">
      {imageSrc && (
        <div className="relative hidden w-40 flex-shrink-0 sm:flex">
          <Image src={imageSrc} alt={title} className=" rounded-l-lg object-cover" fill />
        </div>
      )}
      <div className="p-4">
        <Link href={url}>
          <span className="absolute inset-0 z-10" />
          <h2 className="mb-2 text-lg font-bold text-heading">{title}</h2>
        </Link>
        <div className="prose prose-page dark:prose-invert">
          <p className=" line-clamp-3 text-sm dark:prose-invert">{description}</p>
        </div>
        {hasTags && (
          <div className="mt-3">
            {tags.map(({ title, href }) => (
              <Badge
                key={title}
                className="relative z-20"
                variant="secondary"
                clickable
                as={Link}
                href={href}
              >
                {title}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
