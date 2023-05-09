import { Button } from '@/ui/Button';
import { FiGithub, FiRss } from 'react-icons/fi';
import { cn } from '@/utils';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerWrapperClassName = cn(
    'container border-t border-slate-200 dark:border-zinc-800 py-5',
    'text-center text-sm text-gray-600 dark:text-gray-400',
    'flex flex-col items-center gap-4',
    'sm:flex-row-reverse sm:justify-between sm:items-start sm:py-10'
  );
  const linksClassName = cn('font-semibold hover:underline', 'text-gray-500 dark:text-gray-400');

  return (
    <footer className="mt-32">
      <div className={footerWrapperClassName}>
        <p>© Copyright {currentYear} Rostyslav Ugryniuk</p>
        <div className="inline-flex items-center gap-2">
          <a href="#" className={linksClassName}>
            Colophon
          </a>
          <small>•</small>
          <a href="#" className={linksClassName}>
            Uses
          </a>
          <small>•</small>
          <a href="#" className={linksClassName}>
            Github
          </a>
          <small>•</small>
          <a href="#" className={linksClassName}>
            RSS
          </a>
        </div>
      </div>
    </footer>
  );
};
