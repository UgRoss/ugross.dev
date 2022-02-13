import React from 'react';
import { Footer } from './Footer';
import { siteConfig } from '~/config/site.config';
import { Nav } from './Nav';
import '~/styles/index.scss';

interface LayoutProps {
  showHeader?: boolean;
  showFooter?: boolean;

  children: React.ReactNode;
  className?: string;
}

/** Main Layout */
export const Layout: React.FunctionComponent<LayoutProps> = ({
  showHeader = true,
  showFooter = true,
  className = '',
  children,
}) => (
  <div
    className={`${className} min-h-screen flex flex-col bg-white dark:bg-dark-body transition-colors duration-500 ease-in`}
  >
    {showHeader && <Nav navLinks={siteConfig.navItems} />}
    {children}
    {showFooter && (
      <Footer
        copyrightText={siteConfig.footerText}
        githubURL={siteConfig.github}
        rssURL={siteConfig.rss}
      />
    )}
  </div>
);
