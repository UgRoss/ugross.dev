import React, { useState } from 'react';
import { Link } from 'gatsby';
import { NoSSR } from '~/components/NoSSR';
import { DarkModeToggle } from '~/components/DarkModeToggle';
import { NavToggleButton } from '~/components/NavToggleButton';

interface NavProps {
  navLinks: Array<{ url: string; name: string; partiallyActive?: boolean }>;
}

export const Nav: React.FC<NavProps> = ({ navLinks }) => {
  const [isMobileNavOpened, setIsMobileNavOpened] = useState(false);
  const handleMobileMenuClick = () => setIsMobileNavOpened(!isMobileNavOpened);

  return (
    <nav>
      <div className="container px-6 py-6 mx-auto">
        <div className="sm:flex sm:flex-row-reverse sm:items-center sm:justify-between">
          <div className="flex items-center justify-between">
            {/* Mobile menu button */}
            <div className="flex sm:hidden">
              <NavToggleButton onClick={handleMobileMenuClick} toggled={!isMobileNavOpened} />
            </div>
            <div className="flex items-center">
              <NoSSR>
                <DarkModeToggle />
              </NoSSR>
            </div>
          </div>
          {/* Mobile Menu open: "block", Menu closed: "hidden" */}
          <div
            className={`flex-1 sm:flex md:items-center sm:justify-between ${
              isMobileNavOpened ? 'hidden' : ''
            }`}
          >
            <div className="flex flex-col -mx-4 sm:flex-row sm:items-center sm:mr-4">
              {navLinks.map(({ url, name, partiallyActive }) => (
                <Link
                  to={url}
                  partiallyActive={partiallyActive}
                  activeClassName="bg-btn-tint text-btn-tint-hover hover:bg-btn-tint dark:btn-tint"
                  className="border-none px-3 py-1 mx-2 mt-2 font-medium transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700"
                  key={url}
                >
                  {name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
