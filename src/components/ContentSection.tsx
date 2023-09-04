import { Link } from './Link';
import { ArrowRight } from './PhosphorIcons';

interface ContentSectionProps {
  children: React.ReactElement | React.ReactElement[];
  link: string;
  title: string;
}

export function ContentSection({ children, link, title }: ContentSectionProps) {
  return (
    <div>
      <div className="flex items-center justify-between text-heading">
        <h3 className="text-lg font-semibold leading-none tracking-tight">{title}</h3>
        <Link
          className="text-sm hover:text-primary"
          endIcon={ArrowRight}
          href={link}
          withUnderline={false}
        >
          View all
        </Link>
      </div>

      <div className="mt-6 flex flex-col gap-5">{children}</div>
    </div>
  );
}
