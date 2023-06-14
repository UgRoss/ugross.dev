import { Link } from './Link';
import { ArrowRight } from '@phosphor-icons/react';

interface ContentSectionProps {
  title: string;
  link: string;
  children: React.ReactElement | React.ReactElement[];
}

export function ContentSection({ title, link, children }: ContentSectionProps) {
  return (
    <div>
      <div className="flex items-center justify-between text-heading">
        <h3 className="text-xl font-semibold leading-none tracking-tight">{title}</h3>
        <Link
          href={link}
          className="text-sm hover:text-primary"
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
