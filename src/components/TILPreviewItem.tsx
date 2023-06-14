import { Badge } from './Badge';
import Link from 'next/link';

interface TILPreviewProps {
  title: string;
  tag: { title: string; href: string };
  href: string;
}

export function TILPreviewItem({ title, tag, href }: TILPreviewProps) {
  return (
    <li className="group relative py-2.5">
      <div className="transition-opacity">
        <section className="flex items-center">
          <div className="text-secondary shrink-0 md:w-36">
            {tag && (
              <Badge
                className="relative z-20"
                variant="secondary"
                clickable
                as={Link}
                href={tag.href}
              >
                {tag.title}
              </Badge>
            )}
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
