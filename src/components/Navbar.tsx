'use client';
import Link from 'next/link';
import { Fragment } from 'react';
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

  return (
    <nav className="border-b border-slate-100 z-40 fixed top-0 left-0 w-full bg-white dark:border-gray-600 dark:bg-gray-900">
      <div className="relative flex h-16 items-center justify-between">
        <div className="container grid gap-4 grid-flow-col auto-cols-max sm:grid-cols-[auto_1fr_auto] justify-between sm:justify-start auto-cols-fr items-center">
          {/* Mobile Nav */}
          <div className="sm:hidden">
            <Dropdown label="Menu" options={navigationItems} onSelect={() => console.log('slec')} />
          </div>
          <div className="flex justify-center">
            <Image src={profilePic} alt="Ross's Avatar" width={32} height={32} />
          </div>
          {/* Desktop Nav */}
          <div className="hidden sm:block">
            <div className="flex space-x-4">
              {navigationItems.map((item) => {
                return item.href ? (
                  <Button
                    variant="ghost"
                    active={item.current}
                    as={Link}
                    href={item.href}
                    key={item.label}
                    aria-current={item.current ? 'page' : undefined}
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
