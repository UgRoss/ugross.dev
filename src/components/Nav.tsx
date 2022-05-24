import React from 'react';
import { CommandPaletteButton } from '~/components/CommandPaletteButton';
import Link from 'next/link';

interface NavProps {
  navLinks: Array<{ url: string; name: string; activePaths: string[] }>;
}

export const Nav: React.FC<NavProps> = () => {
  return (
    <nav>
      <div className="container px-6 py-6 mx-auto">
        <div className="flex flex-row-reverse items-center justify-between">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1">
              <CommandPaletteButton />
            </div>
          </div>
          <div className={`flex-1 flex items-center justify-between`}>
            <div className="flex flex-row items-center sm:mr-4">
              <span className="dark:text-white">
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
