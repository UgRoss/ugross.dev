import React from 'react';
import { Footer } from './Footer';
import { Navbar } from '~/components/Navbar';
import { siteConfig } from '~/config/site.config';
import '~/styles/index.scss';

interface LayoutProps {
  /**
   * Render Header
   * @default true
   */
  showHeader?: boolean;
  /**
   * Render Footer
   * @default true
   */
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
    className={`${className} min-h-screen flex flex-col bg-white dark:bg-slate-800 transition-colors duration-500 ease-in`}
  >
    {showHeader && <Navbar navLinks={siteConfig.navItems} />}
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
