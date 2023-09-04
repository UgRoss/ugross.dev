import Link from 'next/link';
import { Badge } from './Badge';

interface TILPreviewProps {
  href: string;
  tags?: { href: string; title: string }[];
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
                clickable
                href={tag.href}
                key={tag.href}
                variant="secondary"
              >
                {tag.title}
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
