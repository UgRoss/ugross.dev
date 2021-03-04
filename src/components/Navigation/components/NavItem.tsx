import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const NavLink = styled(Link)`
  display: inline-flex;
  color: var(--button-tint-color);
  background-color: var(--button-tint-background);
  padding: var(--space-xxs) var(--space-sm);
  border-radius: var(--border-radius);
  margin: var(--space-xs);
  border: 0;

  &:visited {
    color: var(--button-tint-color);
  }

  &:hover,
  &.NavItem--active {
    color: var(--button-tint-color-hover);
    background-color: var(--button-tint-background-hover);
  }
`;

interface NavItemProps {
  href: string;
  title: string;
  partiallyActive?: boolean;
  className?: string;
}

export const NavItem: React.FC<NavItemProps> = ({ href, title, className = '', partiallyActive = false }) => (
  <li className={`${className} m-0`}>
    <NavLink to={href} partiallyActive={partiallyActive} activeClassName="NavItem--active">
      {title}
    </NavLink>
  </li>
);
