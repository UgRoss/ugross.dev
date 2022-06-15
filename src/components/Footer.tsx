import React from 'react';
import { NAV_ITEMS } from '~/configs/site.config';
import Link from 'next/link';

interface FooterProps {
  copyrightText: string;
}

export const Footer: React.FC<FooterProps> = ({ copyrightText }) => {
  return (
    <footer className="text-muted text-sm text-center mt-auto pt-20">
      <div className="container flex flex-col space-y-5 sm:space-y-0 sm:flex-row items-center justify-between border-t dark:border-gray-700 py-6 px-2">
        <div className="flex space-x-5">
          {NAV_ITEMS.map(({ url, name }) => (
            <Link href={url} key={url}>
              <a className="font-normal border-0 hover:text-link transition-colors">{name}</a>
            </Link>
          ))}
        </div>
        <div>
          <p className="m-xs">{copyrightText}</p>
        </div>
      </div>
    </footer>
  );
};
