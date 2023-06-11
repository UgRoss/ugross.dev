import React, { ReactNode } from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { cn, isExternalLink } from '~/utils';

type AnchorProps = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

type LinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
} & (AnchorProps | NextLinkProps);

export function Link(props: LinkProps) {
  const shouldRenderAnchorElement = isExternalLink(props.href);
  const linkClassName = cn(
    'relative font-semibold dark:text-white no-underline',
    'after:content-[""] after:absolute after:w-full after:h-0.5 after:-bottom-0.5 after:left-0 after:transition-all after:duration-300 after:rounded',
    'after:bg-gray-300 dark:after:bg-gray-600 hover:cursor-pointer hover:dark:after:bg-primary hover:after:bg-primary',
    props.className
  );

  if (shouldRenderAnchorElement) {
    return <a {...(props as AnchorProps)} className={linkClassName} />;
  }

  return <NextLink {...(props as NextLinkProps)} className={linkClassName} />;
}
