import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import classNames from 'classnames';
import './Link.scss';

interface LinkProps {
  appearance?: 'link' | 'button';
  to?: string;
  href?: string;
  className?: string;
  partiallyActive?: boolean;
  children?: React.ReactElement | string;
}

export const Link: React.FC<LinkProps> = ({
  appearance = 'link',
  className,
  to,
  href,
  partiallyActive = false,
  children,
  ...props
}) => {
  const linkClassName = classNames(className, 'Link', `Link--${appearance}`);

  if (to) {
    return (
      <GatsbyLink
        to={to}
        className={linkClassName}
        activeClassName={`Link--${appearance}--active`}
        partiallyActive={partiallyActive}
      >
        {children}
      </GatsbyLink>
    );
  }

  return (
    <a href={href} className={linkClassName} {...props}>
      {children}
    </a>
  );
};
