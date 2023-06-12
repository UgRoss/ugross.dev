import { Link } from './Link';
import { ArrowRight } from '@phosphor-icons/react';

interface ContentSectionProps {
  title: string;
  description: string;
  link: string;
  children: React.ReactElement;
}

export function ContentSection({ title, link, children }: ContentSectionProps) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h3 className="text-md font-semibold leading-none tracking-tight">{title}</h3>
        <Link
          href={link}
          className="text-xs hover:text-primary"
          withUnderline={false}
          endIcon={ArrowRight}
        >
          View all
        </Link>
      </div>

      <div className="mt-5 flex flex-col gap-5">{children}</div>
    </div>
  );
}
