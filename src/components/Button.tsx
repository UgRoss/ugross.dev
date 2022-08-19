import React, { forwardRef } from 'react';
import classNames from 'classnames';

const classes = {
  base: 'rounded-md focus:outline-none transition ease-in-out duration-300 leading-5',
  disabled: 'opacity-50 cursor-not-allowed',
  pill: 'rounded-full',
  size: {
    small: 'px-2 py-1 text-sm',
    normal: 'px-3 py-2',
    large: 'px-8 py-3 text-lg',
  },
  variant: {
    default: 'bg-inset',
    primary:
      'bg-blue-500 hover:bg-blue-800 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-white',
    secondary:
      'bg-gray-200 hover:bg-gray-800 focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 text-gray-900 hover:text-white',
    danger:
      'bg-red-500 hover:bg-red-800 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 text-white',
    invisible:
      'text-default bg-default hover:bg-inset hover:bg-subtle focus:ring-2 focus:ring-opacity-50 focus:ring-accent',
  },
};

interface ButtonProps {
  children: string | React.ReactElement;
  type?: 'button' | 'submit';
  className?: string;
  variant?: 'default' | 'primary' | 'secondary' | 'danger' | 'invisible';
  size?: 'small' | 'normal' | 'large';
  pill?: boolean;
  disabled?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      type = 'button',
      className,
      variant = 'primary',
      size = 'normal',
      pill = false,
      disabled = false,
      ...props
    },
    ref
  ) => {
    const buttonClassName = classNames(
      className,
      classes.variant[variant],
      classes.base,
      classes.size[size],
      pill && classes.pill,
      disabled && classes.disabled
    );

    return (
      <button ref={ref} disabled={disabled} type={type} className={buttonClassName} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
