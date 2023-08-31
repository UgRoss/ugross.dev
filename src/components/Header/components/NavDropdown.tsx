import { useMemo } from 'react';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { CaretDown, Sun, MoonStars } from '@phosphor-icons/react';
import { cn } from '~/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '~/components/DropdownMenu';
import { ActiveNavItemHighlighter } from './ActiveNavItemHighlighter';

export function NavDropdown({ items }: any) {
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const isLightTheme = theme === 'light';
  const ThemeIcon = isLightTheme ? MoonStars : Sun;
  const hasActiveItem = useMemo(
    () => items.some((item: any) => item.href === pathname),
    [pathname, items]
  );

  const handleToggleThemeClick = () => {
    if (isLightTheme) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={cn(
          'flex items-center gap-1 px-3 font-medium hover:text-primary focus-visible:outline-none data-[state=open]:text-primary relative h-full',
          {
            'text-primary': hasActiveItem,
          }
        )}
      >
        More <CaretDown />
        {hasActiveItem && <ActiveNavItemHighlighter className="right-1.5" />}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-2 w-56 rounded-lg p-2">
        {items.map((item: any) => (
          <DropdownMenuItem key={item.href} asChild>
            <Link
              href={item.href}
              className={cn('w-full cursor-pointer px-2 text-sm font-medium hover:text-primary', {
                'text-primary': pathname === item.href,
              })}
            >
              {item.name}
            </Link>
          </DropdownMenuItem>
        ))}

        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer font-medium" onClick={handleToggleThemeClick}>
          <ThemeIcon className="mr-2 h-4 w-4" />
          <span>Toggle Theme</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
