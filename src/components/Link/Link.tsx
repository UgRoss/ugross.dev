import React from 'react';
import { Link as GatsbyLink, GatsbyLinkProps } from 'gatsby';
import classNames from 'classnames';
import './Link.scss';

interface LinkProps {
  appearance?: 'link' | 'button';
  to?: string;
  href?: string;
  className?: string;
  children?: React.ReactElement | string;
}

export const Link: React.FC<LinkProps & GatsbyLinkProps<{}>> = ({
  appearance = 'link',
  className,
  to,
  href,
  children,
  ...props
}) => {
  const linkClassName = classNames(className, 'Link', `Link--${appearance}`);

  if (to) {
    return (
      <GatsbyLink
        to={to}
        className={linkClassName}
        {...(props as any)}
        activeClassName={`Link--${appearance}--active`}
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
