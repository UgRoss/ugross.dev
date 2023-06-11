import { cn } from '~/utils';
import { Link } from '~/components/Link';

interface FooterProps {
  links?: {
    title: string;
    href: string;
  }[];
}

/**
<Link href="#" className={linksClassName}>
  Colophon
</Link>
<small>•</small>
<Link href="#" className={linksClassName}>
  Uses
</Link>
<small>•</small>
<Link href="#" className={linksClassName}>
  Github
</Link>
<small>•</small>
<Link href="#" className={linksClassName}>
  RSS
</Link>
*/

export function Footer({ links = [] }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const hasLinks = links.length > 0;

  const footerWrapperClassName = cn(
    'container border-t border-slate-200 dark:border-zinc-800 py-5',
    'text-center text-sm text-muted',
    'flex flex-col items-center gap-4',
    'sm:flex-row-reverse sm:justify-center sm:items-start sm:py-10',
    { 'sm:justify-between': hasLinks }
  );
  const linksClassName = cn(
    'text-muted dark:text-muted after:bg-transparent dark:after:bg-transparent'
  );

  return (
    <footer className="mt-32">
      <div className={footerWrapperClassName}>
        <p>© {currentYear} Rostyslav Ugryniuk</p>
        {hasLinks && (
          <div className="inline-flex items-center gap-2">
            {links.map(({ title, href }) => (
              <Link href="#" className={linksClassName} key={href}>
                {title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </footer>
  );
}
