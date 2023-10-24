import { Link } from '~/components/Link';
import { cn } from '~/utils';

interface FooterProps {
  copyright?: string;
  links?: {
    href: string;
    title: string;
  }[];
}

export function Footer({ copyright = '© All rights reserved', links = [] }: FooterProps) {
  const hasLinks = links.length > 0;

  const footerWrapperClassName = cn(
    'container border-t border-slate-200 dark:border-zinc-800 py-4',
    'text-center text-sm text-muted',
    'flex flex-col items-center gap-4',
    'sm:flex-row-reverse sm:justify-center sm:items-start sm:py-6',
    { 'sm:justify-between': hasLinks }
  );
  const linksClassName = cn(
    'text-muted dark:text-muted after:bg-transparent dark:after:bg-transparent'
  );

  return (
    <footer className="mt-32">
      <div className={footerWrapperClassName}>
        <p>{copyright}</p>
        {hasLinks && (
          <div className="inline-flex items-center gap-2">
            {links.map(({ href, title }) => (
              <Link className={linksClassName} href={href} key={href}>
                {title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </footer>
  );
}
