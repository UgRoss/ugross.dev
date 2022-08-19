import React from 'react';
import { NAV_ITEMS } from '~/configs/site.config';
import Link from 'next/link';

interface FooterProps {
  copyrightText: string;
}

export const Footer: React.FC<FooterProps> = ({ copyrightText }) => {
  return (
    <footer className="mt-auto pt-20 text-center text-sm text-subdued">
      <div className="container flex flex-col items-center justify-between space-y-5 border-t border-muted py-6 px-2 sm:flex-row sm:space-y-0">
        <ul className="mt-3 flex flex-wrap items-center space-x-5 sm:mt-0">
          {NAV_ITEMS.map(({ url, name }) => (
            <li key={url}>
              <Link href={url}>
                <a className="hover:underline hover:text-muted">{name}</a>
              </Link>
            </li>
          ))}
        </ul>

        <p className="m-xs text-subdued sm:text-center">{copyrightText}</p>
      </div>
    </footer>
  );
};
