import React, { memo } from 'react';
import classNames from 'classnames';
import { Link } from 'gatsby';

interface NavItemProps {
  href: string;
  title: string;
  partiallyActive?: boolean;
  className?: string;
}

interface RouterLinkProps {
  isCurrent: boolean;
  isPartiallyCurrent: boolean;
  href: string;
}

export const NavItem: React.FC<NavItemProps> = memo(
  ({ href, title, className, partiallyActive = false }) => {
    const getProps = ({ isCurrent, isPartiallyCurrent }: RouterLinkProps) => {
      const isActive = partiallyActive ? isPartiallyCurrent : isCurrent;
      const itemClassName = classNames(className, 'button', 'button--tint', {
        'button--active': isActive,
      });

      return { className: itemClassName };
    };

    return (
      <Link to={href} getProps={getProps}>
        {title}
      </Link>
    );
  }
);
