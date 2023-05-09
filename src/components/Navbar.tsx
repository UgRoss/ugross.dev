'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Fragment, useEffect } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import Image from 'next/image';
import profilePic from '../../public/avatar.png';
import { Button } from '@/ui/Button';
import { Dropdown } from '@/ui/Dropdown';
import { FiArrowUpRight, FiMoon, FiSun, FiMenu, FiX } from 'react-icons/fi';
import { Theme, useDarkMode } from '@/hooks/useDarkMode';

export const navigationItems = [
  { label: 'About', href: '/', current: true },
  { label: 'Blog', href: '/blog', current: false },
  {
    label: 'More',
    options: [
      {
        label: 'Today I Learned',
        href: '/til',
        withSeparator: false,
      },
      // {
      //   label: 'Books',
      //   href: '/books',
      //   withSeparator: false,
      // },
      // {
      //   label: 'Hobbies',
      //   href: '/hobbies',
      //   withSeparator: false,
      // },
      {
        label: 'Github',
        href: '/',
        withSeparator: true,
        rightIcon: FiArrowUpRight,
      },
      {
        label: 'LinkedIn',
        href: 'https://github.com/UgRoss',
        withSeparator: false,
        rightIcon: FiArrowUpRight,
      },
      {
        label: 'Command Palette',
        onClick: () => console.log('clicked'),
        withSeparator: true,
        secondaryText: '⌘K',
      },
    ],
  },
];

export function Navbar() {
  const [theme, , toggleTheme] = useDarkMode();
  const isDarkTheme = theme === Theme.DARK;
  const pathname = usePathname();
  const isRootRoute = pathname === '/';
  console.log('pathname', pathname);

  useEffect(() => {
    return () => console.log('unmounted');
  }, []);

  return (
    <nav className="fixed top-0 left-0 z-40 w-full border-b border-slate-100 bg-white dark:border-zinc-800 dark:bg-zinc-900">
      <div className="relative flex h-16 items-center justify-between">
        <div className="container grid auto-cols-max auto-cols-fr grid-flow-col items-center justify-between gap-4 sm:grid-cols-[auto_1fr_auto] sm:justify-start">
          {/* Mobile Nav */}
          <div className="sm:hidden">
            <Dropdown label="Menu" options={navigationItems} onSelect={() => console.log('slec')} />
          </div>
          <Transition
            show={!isRootRoute}
            enter="transition-width duration-500 ease-in-out"
            enterFrom="opacity-0 w-0"
            enterTo="opacity-100 w-[32px]"
            leave="transition-width duration-500 ease-in-out"
            leaveFrom="opacity-100 w-[32px]"
            leaveTo="opacity-0 w-0"
          >
            <Image src={profilePic} alt="Ross's Avatar" width={32} height={32} />
          </Transition>
          <div className="hidden sm:block">
            <div className="flex space-x-4">
              {navigationItems.map((item) => {
                const isCurrentPage = item.href === pathname;
                return item.href ? (
                  <Button
                    variant="ghost"
                    active={isCurrentPage}
                    as={Link}
                    href={item.href}
                    key={item.label}
                    aria-current={isCurrentPage ? 'page' : undefined}
                  >
                    {item.label}
                  </Button>
                ) : (
                  <Dropdown
                    label={item.label}
                    options={item.options}
                    onSelect={(value) => console.log(value)}
                  />
                );
              })}
            </div>
          </div>
          <div className="flex justify-end">
            <Button
              size="sm"
              variant="subtle"
              icon={isDarkTheme ? FiMoon : FiSun}
              aria-label="Toggle dark mode"
              onClick={toggleTheme}
            >
              <span className="sr-only">Toggle dark mode</span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
