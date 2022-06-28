import React from 'react';
import { siteConfig } from '~/configs/site.config';
import { Footer } from '~/components/Footer';
import { Nav } from '~/components/Nav';
import { NoSSR } from '~/components/NoSSR';
import { CommandPalette } from '~/components/CommandPalette';

interface LayoutProps {
  showHeader?: boolean;
  showFooter?: boolean;
  showCommandPalette?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const Layout: React.FunctionComponent<LayoutProps> = ({
  showHeader = true,
  showFooter = true,
  showCommandPalette = true,
  className = '',
  children,
}) => (
  <div className={`${className} dark:bg-body-dark flex min-h-screen flex-col bg-body`}>
    {showCommandPalette && (
      <NoSSR>
        <CommandPalette />
      </NoSSR>
    )}
    {showHeader && <Nav navLinks={siteConfig.navItems} />}
    {children}
    {showFooter && <Footer copyrightText={siteConfig.footerText} />}
  </div>
);
