import React, { ReactNode } from 'react';
import { Icon } from '@phosphor-icons/react';
import { type VariantProps, cva } from 'class-variance-authority';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { cn, isExternalLink } from '~/utils';

const linkVariants = cva('font-medium inline-flex items-center transition-all duration-300', {
  compoundVariants: [
    {
      className: 'hover:text-primary dark:hover:text-primary',
      textColor: 'default',
      withUnderline: false,
    },
  ],
  defaultVariants: {
    textColor: 'default',
    withUnderline: true,
  },
  variants: {
    textColor: {
      default: 'dark:text-white',
      primary: 'text-primary hover:text-white',
    },
    withUnderline: {
      false: '',
      true: [
        'no-underline relative',
        'after:content-[""] after:absolute after:w-full after:h-0.5 after:bottom-0 after:left-0 after:transition-all after:duration-300 after:rounded',
        'after:bg-gray-300 dark:after:bg-gray-600 hover:cursor-pointer hover:dark:after:bg-primary hover:after:bg-primary',
      ],
    },
  },
});

type AnchorProps = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

type LinkProps = {
  children: ReactNode;
  className?: string;
  endIcon?: Icon;
  href: string;
  iconClassName?: string;
  startIcon?: Icon;
} & VariantProps<typeof linkVariants> &
  (AnchorProps | NextLinkProps);

export function Link({
  children,
  className,
  endIcon: EndIcon,
  iconClassName,
  startIcon: StartIcon,
  textColor,
  withUnderline,
  ...props
}: LinkProps) {
  const shouldRenderAnchorElement = isExternalLink(props.href);
  const linkClassName = cn(linkVariants({ className, textColor, withUnderline }));
  const content = (
    <>
      {StartIcon && <StartIcon className={cn('mr-1', iconClassName)} weight="bold" />}
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
