import React, { ReactNode } from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { cva, type VariantProps } from 'class-variance-authority';
import { Icon } from '@phosphor-icons/react';
import { cn, isExternalLink } from '~/utils';

const linkVariants = cva('font-medium inline-flex items-center transition-all duration-300', {
  variants: {
    withUnderline: {
      true: [
        'no-underline relative',
        'after:content-[""] after:absolute after:w-full after:h-0.5 after:bottom-0 after:left-0 after:transition-all after:duration-300 after:rounded',
        'after:bg-gray-300 dark:after:bg-gray-600 hover:cursor-pointer hover:dark:after:bg-primary hover:after:bg-primary',
      ],
      false: '',
    },
    textColor: {
      default: 'dark:text-white',
      primary: 'text-primary hover:text-white',
    },
  },
  defaultVariants: {
    withUnderline: true,
    textColor: 'default',
  },
});

type AnchorProps = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

type LinkProps = {
  children: ReactNode;
  href: string;
  className?: string;
  iconClassName?: string;
  endIcon?: Icon;
} & VariantProps<typeof linkVariants> &
  (AnchorProps | NextLinkProps);

export function Link({
  withUnderline,
  textColor,
  endIcon: EndIcon,
  className,
  iconClassName,
  children,
  ...props
}: LinkProps) {
  const shouldRenderAnchorElement = isExternalLink(props.href);
  const linkClassName = cn(linkVariants({ withUnderline, textColor, className }));
  const content = (
    <>
      {children}
      {EndIcon && <EndIcon className={cn('ml-1', iconClassName)} weight="bold" />}
    </>
  );

  if (shouldRenderAnchorElement) {
    return (
      <a {...(props as AnchorProps)} className={linkClassName}>
        {content}
      </a>
    );
  }

  return (
    <NextLink {...(props as NextLinkProps)} className={linkClassName}>
      {content}
    </NextLink>
  );
}
