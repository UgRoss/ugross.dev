import React, { PropsWithChildren, createElement } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '~/utils';

const badgeVariants = cva('font-medium inline-flex', {
  variants: {
    size: {
      default: 'text-xs px-2.5 py-0.5',
      lg: 'text-sm px-2.5 py-0.5',
    },
    pill: {
      true: 'rounded-full',
      false: 'rounded',
    },
    variant: {
      primary: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
      secondary: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300',
      red: 'bg-red-100 text-red-800dark:bg-red-900 dark:text-red-300',
      green: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
      yellow: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
      indigo: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300',
      purple: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
      pink: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300',
    },
    clickable: {
      true: 'cursor-pointer',
      false: '',
    },
  },
  compoundVariants: [
    {
      variant: 'primary',
      clickable: true,
      class: 'hover:bg-blue-200',
    },
    {
      variant: 'secondary',
      clickable: true,
      class: 'hover:bg-gray-200',
    },
  ],
  defaultVariants: {
    size: 'default',
    pill: false,
    variant: 'primary',
    clickable: false,
  },
});

interface BadgeProps<T extends keyof JSX.IntrinsicElements | React.ComponentType<any>>
  extends VariantProps<typeof badgeVariants> {
  as?: T;
  className?: string;
  [key: string]: any;
}

export function Badge<T extends keyof JSX.IntrinsicElements | React.ComponentType<any>>({
  as: Component = 'span' as T,
  size,
  variant,
  pill,
  clickable,
  className,
  children,
  ...props
}: PropsWithChildren<BadgeProps<T>>) {
  return createElement(
    Component,
    {
      className: cn(badgeVariants({ size, variant, clickable, pill, className })),
      ...props,
    },
    children
  );
}
