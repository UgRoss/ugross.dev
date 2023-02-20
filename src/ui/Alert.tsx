import type { ReactNode } from 'react';
import { VariantProps, cva } from 'class-variance-authority';

import { cn } from '@/utils';

const alertVariants = cva('p-4 mb-4 text-sm [&>p:only-child]:my-0', {
  variants: {
    type: {
      default: 'text-gray-800 rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-gray-300',
      info: 'text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400',
      danger: 'text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400',
      success: 'text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400',
      warning: 'text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300',
    },
  },
  defaultVariants: {
    type: 'default',
  },
});

interface AlertProps extends VariantProps<typeof alertVariants> {
  children: ReactNode;
  className?: string;
}

export const Alert = ({ className = '', children, type }: AlertProps) => {
  return <div className={cn(alertVariants({ type, className }))}>{children}</div>;
};
