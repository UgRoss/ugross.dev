import { Link } from './Link';
import { ArrowRight } from './PhosphorIcons';

interface ContentSectionProps {
  title: string;
  link: string;
  children: React.ReactElement | React.ReactElement[];
}

export function ContentSection({ title, link, children }: ContentSectionProps) {
  return (
    <div>
      <div className="flex items-center justify-between text-heading">
        <h3 className="text-lg font-semibold leading-none tracking-tight">{title}</h3>
        <Link
          href={link}
          className="text-sm hover:text-primary"
          withUnderline={false}
          endIcon={ArrowRight}
        >
          View all
        </Link>
      </div>

      <div className="mt-6 flex flex-col gap-5">{children}</div>
    </div>
  );
}
