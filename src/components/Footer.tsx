import React from 'react';
import classNames from 'classnames';
import { Rss, GitHub } from 'react-feather';
import { Link } from '~/components/Link';

interface FooterProps {
  copyrightText: string;
  githubURL: string;
  rssURL: string;
}

export const Footer: React.FC<FooterProps> = ({ copyrightText, githubURL, rssURL }) => {
  const footerButtonClassName = classNames(
    'font-medium text-gray-800 dark:text-gray-300 rounded-md px-2 py-2 transition duration-500 ease select-none border-0',
    'hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none'
  );

  return (
    <footer className="text-muted dark:text-muted-dark text-sm text-center pb-5 pt-14 mt-auto">
      <div className="container flex flex-col sm:flex-row items-center justify-between">
        <div>
          <p className="m-xs">{copyrightText}</p>
        </div>
        <div className="flex items-center mt-3 sm:mt-0 gap-2">
          <Link href={rssURL} alt="RSS Feed" className={footerButtonClassName}>
            <Rss size="1.2rem" aria-hidden="true" />
            <span className="sr-only">RSS Feed</span>
          </Link>
          <Link
            href={githubURL}
            alt="Github Profile"
            target="_blank"
            rel="noreferrer noopener"
            className={footerButtonClassName}
          >
            <GitHub size="1.2rem" aria-hidden="true" />
            <span className="sr-only">Github Profile</span>
          </Link>
        </div>
      </div>
    </footer>
  );
};
