import Image from 'next/image';
import Link from 'next/link';
import { Badge } from './Badge';

interface ArticleCardProps {
  description: string;
  imageSrc: string;
  tags?: { href: string; title: string }[];
  title: string;
  url: string;
}

export const ArticleCard = ({
  description,
  imageSrc,
  tags,
  title,
  url,
}: Readonly<ArticleCardProps>) => {
  const hasTags = Array.isArray(tags) && tags.length > 0;

  return (
    <div className="relative flex cursor-pointer items-stretch rounded-lg border bg-card shadow-sm transition hover:scale-[1.01]">
      {imageSrc && (
        <div className="relative hidden w-40 flex-shrink-0 sm:flex">
          <Image alt={title} className=" rounded-l-lg object-cover" src={imageSrc} fill />
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
          <div className="mt-3 flex gap-2">
            {tags.map(({ href, title }) => (
              <Badge
                as={Link}
                className="relative z-20"
                href={href}
                key={title}
                variant="secondary"
                clickable
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
