import React from 'react';
import styled from 'styled-components';
import { Rss, GitHub } from 'react-feather';
import { siteConfig } from '~/config/site.config';
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
}

export const Footer: React.FC<FooterProps> = ({ copyrightText }) => {
  return (
    <footer className="text-muted text-sm text-center p-xs pt-lg mt-auto">
      <div className="container flex items-center justify-between">
        <div>
          <p className="m-xs">{copyrightText}</p>
        </div>
        <div className="flex items-center">
          <FooterLink href="/rss.xml" alt="RSS Feed">
            <Rss size="1rem" />
          </FooterLink>
          <FooterLink href={siteConfig.github} alt="Github Profile" target="_blank" rel="noreferrer noopener">
            <GitHub size="1rem" />
          </FooterLink>
        </div>
      </div>
    </footer>
  );
};
