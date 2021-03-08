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
  <footer className="text-muted text-sm text-center p-xs pt-lg mt-auto">
    <div className="container flex items-center justify-between">
      <div>
        <p className="m-xs">{copyrightText}</p>
      </div>
      <div className="flex items-center">
        <FooterLink href={rssURL} alt="RSS Feed">
          <Rss size="1rem" />
        </FooterLink>
        <FooterLink href={githubURL} alt="Github Profile" target="_blank" rel="noreferrer noopener">
          <GitHub size="1rem" />
        </FooterLink>
      </div>
    </div>
  </footer>
);
