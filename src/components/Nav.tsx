import React, { useEffect, useState } from 'react';
import { Button } from '~/components/Button';
import { CommandPaletteButton } from '~/components/CommandPaletteButton';
import { useScroll } from '~/hooks/useScroll';
import Link from 'next/link';
import { FiCommand } from 'react-icons/fi';

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
      className={`sticky top-0 z-30 w-full bg-default ${scrolled ? 'border-b border-default' : ''}`}
    >
      <div className="container mx-auto py-3 px-6">
        <div className="flex flex-row-reverse items-center justify-between">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1">
              <CommandPaletteButton />

              <Button>
                <FiCommand size="20px" />
              </Button>
              <Button variant="default">
                <FiCommand size="20px" />
              </Button>
              <Button variant="secondary">
                <FiCommand size="20px" />
              </Button>
              <Button variant="danger">
                <FiCommand size="20px" />
              </Button>
              <Button variant="invisible">
                <FiCommand size="20px" />
              </Button>
            </div>
          </div>
          <div className="flex flex-1 items-center justify-between">
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
