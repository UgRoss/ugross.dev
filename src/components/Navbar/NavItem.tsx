import React from 'react';
import { Link } from '~/components/Link';

interface NavItemProps {
  href: string;
  title: string;
  partiallyActive?: boolean;
  className?: string;
}

export const NavItem: React.FC<NavItemProps> = ({
  href,
  title,
  className,
  partiallyActive = false,
}) => (
  <Link to={href} appearance="button" partiallyActive={partiallyActive}>
    {title}
  </Link>
);
