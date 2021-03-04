import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import classNames from 'classnames';

type LinkProps = {
  /** If `to` is not undefined then Link uses Gatsby Link by default */
  to?: string;
  /** Gatsby Link partially active */
  partiallyActive?: boolean;
  /** class name that will only be added to the Gatsby Link when the current item is active */
  activeClassName?: string;
  /** Show link as text */
  asText?: boolean;
} & React.HTMLProps<HTMLAnchorElement>;

const Link: React.FC<LinkProps> = ({
  href,
  to,
  partiallyActive,
  activeClassName,
  children,
  asText = false,
  className = '',
  ...props
}) => {
  const linkClassName = classNames(className, {
    'text-decoration-none text-reset b-0': asText,
  });

  if (to) {
    return (
      <GatsbyLink
        to={to}
        partiallyActive={partiallyActive}
        className={linkClassName}
        activeClassName={activeClassName}
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

export default Link;
