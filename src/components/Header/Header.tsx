'use client';
import { useEffect, useRef } from 'react';
import throttle from 'lodash.throttle';
import { HEADER_ITEMS } from '~/config';
import './Header.css';
import { NavDropdown } from './components/NavDropdown';
import { NavItem } from './components/NavItem';
import { isHeaderNavItemDropdown } from './utils';

export function Header() {
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let lastScroll = 0;

    const validateHeader = () => {
      const windowY = window.scrollY;
      const header = headerRef.current;
      const isHeaderExist = header !== null;

      if (!isHeaderExist) {
        return false;
      }

      if (windowY > 50) {
        header.classList.add('is-hidden');
      } else {
        header.classList.remove('is-hidden');
      }

      if (windowY < lastScroll) {
        header.classList.add('is-visible');
      } else {
        header.classList.remove('is-visible');
      }

      lastScroll = windowY;
    };

    window.addEventListener('scroll', throttle(validateHeader, 500));
  }, []);

  return (
    <header className="sticky flex top-0 z-50 justify-center pt-6" ref={headerRef}>
      <nav className="flex items-center rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
        <ul className="flex items-stretch">
          {HEADER_ITEMS.map((item) => (
            <li key={item.label}>
              {isHeaderNavItemDropdown(item) ? (
                <NavDropdown items={item.items} />
              ) : (
                <NavItem href={item.href}>{item.label}</NavItem>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
