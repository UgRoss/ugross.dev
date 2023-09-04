'use client';
import { CaretDown, Sun } from '@phosphor-icons/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { cn } from '~/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from './DropdownMenu';

const navItems = [
  { href: '/', name: 'Home' },
  { href: '/blog', name: 'Articles' },
  { href: '/uses', name: 'Uses' },
  {
    items: [
      { href: '/til', name: 'Today I Learned' },
      { href: '/books', name: 'Books' },
      { href: '/bookmarks', name: 'Bookmarks' },
    ],
    name: 'More',
  },
];

function NavItem({ children, href }: any) {
  const isActive = usePathname() === href;

  return (
    <li>
      <Link
        className={cn(
          'relative block px-3 py-2 font-medium transition',
          isActive ? 'text-primary' : 'hover:text-primary'
        )}
        href={href}
      >
        {children}
        {isActive && (
          <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-primary/0 via-primary/40 to-primary/0" />
        )}
      </Link>
    </li>
  );
}

function NavDropdown({ items }: any) {
  const { setTheme, theme } = useTheme();

  const handleToggleThemeClick = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-1 px-3 font-medium hover:text-primary">
        More <CaretDown />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-2 w-56 rounded-lg p-2">
        {items.map((item: any) => (
          <DropdownMenuItem className="p-0" key={item.href}>
            <Link
              className="w-full cursor-pointer px-2 py-1.5 text-sm font-medium hover:text-primary"
              href={item.href}
            >
              {item.name}
            </Link>
          </DropdownMenuItem>
        ))}

        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer font-medium" onClick={handleToggleThemeClick}>
          <Sun className="mr-2 h-4 w-4" />
          <span>Toggle Theme</span>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function DesktopNavigation(props: any) {
  return (
    <nav
      {...props}
      className="flex items-center rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10"
    >
      <ul className="flex items-center ">
        {navItems.map((item) =>
          Array.isArray(item.items) ? (
            <NavDropdown items={item.items} key={item.name} />
          ) : (
            <NavItem href={item.href || ''} key={item.name}>
              {item.name}
            </NavItem>
          )
        )}
      </ul>
    </nav>
  );
}

export function Header() {
  return (
    <>
      <header className="relative z-50 flex justify-center pt-6">
        <DesktopNavigation />
      </header>
    </>
  );
}
