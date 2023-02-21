import React, { FC, ReactElement } from 'react';
import { VariantProps, cva } from 'class-variance-authority';

import { cn } from '@/utils';
import { IconType } from 'react-icons';

const buttonVariants = cva(
  'active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 dark:hover:bg-slate-800 dark:hover:text-slate-100 disabled:opacity-50 dark:focus:ring-slate-400 disabled:pointer-events-none dark:focus:ring-offset-slate-900 data-[state=open]:bg-slate-100 dark:data-[state=open]:bg-slate-800',
  {
    variants: {
      variant: {
        default: 'bg-slate-900 text-white hover:bg-slate-700 dark:bg-slate-50 dark:text-slate-900',
        destructive: 'bg-red-500 text-white hover:bg-red-600 dark:hover:bg-red-600',
        outline:
          'bg-transparent border border-slate-200 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100',
        subtle:
          'bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-100',
        ghost:
          'bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 dark:text-slate-100 dark:hover:text-slate-100 data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent',
        link: 'bg-transparent dark:bg-transparent underline-offset-4 hover:underline text-slate-900 dark:text-slate-100 hover:bg-transparent dark:hover:bg-transparent',
      },
      active: {
        true: '',
        false: '',
      },
      size: {
        default: 'h-10 py-2 px-4',
        sm: 'h-9 px-2 rounded-md',
        lg: 'h-11 px-8 rounded-md',
      },
    },
    compoundVariants: [{ variant: 'ghost', active: true, class: 'bg-slate-100' }],
    defaultVariants: {
      variant: 'default',
      size: 'default',
      active: false,
    },
  }
);

interface ButtonProps<T extends string | React.ComponentType<any> = 'button'>
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof buttonVariants> {
  as?: T;
  icon?: IconType;
  [key: string]: any;
}

const Button = <T extends string | React.ComponentType<any>>({
  as: Component = 'button' as T,
  icon: Icon,
  className,
  variant,
  active,
  size,
  children,
  ...props
}: ButtonProps<T>): ReactElement => {
  return (
    <Component
      className={cn(buttonVariants({ variant, size, active, className }))}
      {...(props as any)}
    >
      {Icon && <Icon className="w-5 h-5" />}
      {children}
    </Component>
  );
};

Button.displayName = 'Button';

export { Button, buttonVariants };
