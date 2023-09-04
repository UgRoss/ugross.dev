import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '~/utils';
import { ActiveNavItemHighlighter } from './ActiveNavItemHighlighter';

interface NavItemProps {
  children: React.ReactNode;
  href: string;
}

export function NavItem({ children, href }: NavItemProps) {
  const isActive = usePathname() === href;

  return (
    <Link
      className={cn(
        'relative block px-3 py-2 font-medium transition',
        isActive ? 'text-primary' : 'hover:text-primary'
      )}
      href={href}
    >
      {children}
      {isActive && <ActiveNavItemHighlighter />}
    </Link>
  );
}
