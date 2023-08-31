import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '~/utils';
import { ActiveNavItemHighlighter } from './ActiveNavItemHighlighter';

export function NavItem({ href, children }: any) {
  const isActive = usePathname() === href;

  return (
    <Link
      href={href}
      className={cn(
        'relative block px-3 py-2 font-medium transition',
        isActive ? 'text-primary' : 'hover:text-primary'
      )}
    >
      {children}
      {isActive && <ActiveNavItemHighlighter />}
    </Link>
  );
}
