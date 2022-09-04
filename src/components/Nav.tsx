import React, { useEffect, useState } from 'react';
import { Button } from '~/components/Button';
import { CommandPaletteButton } from '~/components/CommandPaletteButton';
import { useScroll } from '~/hooks/useScroll';
import Link from 'next/link';

interface NavProps {
  navLinks: Array<{ url: string; name: string; activePaths: string[] }>;
}

export const Nav: React.FC<NavProps> = () => {
  const [scrolled, setScrolled] = useState(false);
  const position = useScroll(200);

  useEffect(() => {
    setScrolled(scrolled ? position.y > 50 : position.y > 50);
  }, [position]);

  return (
    <nav
      className={`sticky top-0 z-30 w-full bg-neural-0 dark:bg-neural-1000 ${
        scrolled ? 'border-b border-default' : ''
      }`}
    >
      <div className="container mx-auto py-3 px-6">
        <div className="flex flex-row-reverse items-center justify-between">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1">
              <CommandPaletteButton />
            </div>
          </div>
          <div className="flex flex-1 items-center justify-between">
            <div className="flex flex-row items-center sm:mr-4">
              <span className="text-default dark:text-default-on-dark">
                <Link href="/">
                  <a className="border-0">🧑‍💻 Rostyslav</a>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
