import React from 'react';
import styled from 'styled-components';
import { Rss, GitHub } from 'react-feather';
import { Link } from '~/components/Link';

const FooterLink = styled(Link)`
  &,
  &:visited,
  &:focus {
    color: var(--color-text-muted);
  }

  &:hover,
  &:focus-visible {
    color: var(--color-text);
  }

  & + & {
    margin-left: var(--space-xs);
  }
`;

interface FooterProps {
  copyrightText: string;
  githubURL: string;
  rssURL: string;
}

export const Footer: React.FC<FooterProps> = ({ copyrightText, githubURL, rssURL }) => (
  <footer className="text-muted text-sm text-center pb-5 pt-14 mt-auto">
    <div className="container flex items-center justify-between">
      <div>
        <p className="m-xs">{copyrightText}</p>
      </div>
      <div className="flex items-center">
        <FooterLink
          href={rssURL}
          alt="RSS Feed"
          className="font-medium text-gray-800 rounded-md px-2 py-2 mr-3 transition duration-500 ease select-none hover:bg-gray-200 focus:outline-none focus:shadow-outline border-0"
        >
          <Rss size="1rem" aria-hidden="true" />
          <span className="sr-only">RSS Feed</span>
        </FooterLink>
        <FooterLink
          href={githubURL}
          alt="Github Profile"
          target="_blank"
          rel="noreferrer noopener"
          className="font-medium text-gray-800 rounded-md px-2 py-2 mr-3 transition duration-500 ease select-none hover:bg-gray-200 focus:outline-none focus:shadow-outline border-0"
        >
          <GitHub size="1rem" aria-hidden="true" />
          <span className="sr-only">Github Profile</span>
        </FooterLink>
      </div>
    </div>
  </footer>
);
