import { Button } from '@/ui/Button';
import { FiGithub, FiRss } from 'react-icons/fi';
import { cn } from '@/utils';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerWrapperClassName = cn(
    'container border-t py-5',
    'text-center text-sm text-gray-600',
    'flex flex-col items-center gap-4',
    'sm:flex-row-reverse sm:justify-between sm:items-start sm:py-10'
  );

  return (
    <footer className="mt-32">
      <div className={footerWrapperClassName}>
        <p>© Copyright {currentYear} Rostyslav Ugryniuk</p>
        <div className="inline-flex gap-2 items-center">
          <a href="#" className="font-semibold hover:underline text-gray-500">
            Colophon
          </a>
          <small>•</small>
          <a href="#" className="font-semibold hover:underline text-gray-500">
            Uses
          </a>
          <small>•</small>
          <a href="#" className="font-semibold hover:underline text-gray-500">
            Github
          </a>
          <small>•</small>
          <a href="#" className="font-semibold hover:underline text-gray-500">
            RSS
          </a>
        </div>
      </div>
    </footer>
  );
};
