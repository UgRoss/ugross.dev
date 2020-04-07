import * as React from 'react';
import { Footer } from '~/components/Footer';
import { Navbar } from '~/components/Navbar';
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
  <div className={className}>
    {showHeader && <Navbar />}
    {children}
    {showFooter && <Footer />}
  </div>
);
