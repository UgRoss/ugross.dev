import React, { PropsWithChildren, createElement } from 'react';
import { type VariantProps, cva } from 'class-variance-authority';
import { cn } from '~/utils';

const badgeVariants = cva('font-medium inline-flex transition-all duration-300', {
  compoundVariants: [
    {
      class: 'hover:bg-blue-200',
      clickable: true,
      variant: 'primary',
    },
    {
      class: 'hover:bg-gray-200',
      clickable: true,
      variant: 'secondary',
    },
  ],
  defaultVariants: {
    clickable: false,
    pill: false,
    size: 'default',
    variant: 'primary',
  },
  variants: {
    clickable: {
      false: '',
      true: 'cursor-pointer',
    },
    pill: {
      false: 'rounded',
      true: 'rounded-full',
    },
    size: {
      default: 'text-xs px-2.5 py-0.5',
      lg: 'text-sm px-2.5 py-0.5',
    },
    variant: {
      green: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
      indigo: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300',
      pink: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300',
      primary: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
      purple: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
      red: 'bg-red-100 text-red-800dark:bg-red-900 dark:text-red-300',
      secondary: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300',
      yellow: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
    },
  },
});

interface BadgeProps<T extends React.ComponentType<any> | keyof JSX.IntrinsicElements>
  extends VariantProps<typeof badgeVariants> {
  [key: string]: any;
  as?: T;
  className?: string;
}

export function Badge<T extends React.ComponentType<any> | keyof JSX.IntrinsicElements>({
  as: Component = 'span' as T,
  children,
  className,
  clickable,
  pill,
  size,
  variant,
  ...props
}: PropsWithChildren<BadgeProps<T>>) {
  return createElement(
    Component,
    {
      className: cn(badgeVariants({ className, clickable, pill, size, variant })),
      ...props,
    },
    children
  );
}
