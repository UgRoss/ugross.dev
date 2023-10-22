import Link from 'next/link';
import { Badge } from '~/components/Badge';

interface TILPreviewProps {
  href: string;
  readonly tags?: string[];
  title: string;
}

export function TILPreviewItem({ href, tags = [], title }: TILPreviewProps) {
  return (
    <li className="group relative py-2.5">
      <div className="transition-opacity">
        <section className="flex items-center">
          <div className="text-secondary shrink-0 md:w-36">
            {tags.map((tag) => (
              <Badge
                as={Link}
                className="relative z-20"
                href={`/til?tag=${tag}`}
                key={tag}
                variant="secondary"
                clickable
              >
                {tag}
              </Badge>
            ))}
          </div>
          <Link className="flex-grow-1 font-medium text-heading" href={href}>
            <span className="absolute inset-0 z-10" />
            {title}
          </Link>
        </section>
      </div>
    </li>
  );
}
