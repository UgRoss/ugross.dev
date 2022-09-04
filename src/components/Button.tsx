import type React from 'react';
import type { IconType } from 'react-icons';
import classNames from 'classnames';

interface ButtonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children?: string | React.ReactElement;
  type?: 'button' | 'submit';
  className?: string;
  variant?: 'default' | 'primary' | 'invisible';
  size?: 'small' | 'normal' | 'large';
  disabled?: boolean;
  Icon?: IconType;
}

export const Button: React.FC<ButtonProps & React.HTMLProps<HTMLButtonElement>> = ({
  children,
  onClick,
  Icon,
  variant = 'default',
  size = 'small',
  disabled = false,
  className,
  ...props
}) => {
  const buttonClassName = classNames(
    'rounded-lg border outline-none focus-visible:ring flex items-center justify-center gap-2 font-semibold text-sm',
    {
      // Variants
      'bg-neural-100 border-neural-400 hover:bg-neural-200 ring-primary-200': variant === 'default',
      'bg-transparent border-transparent hover:bg-primary-100 hover:border-primary-100 hover:text-primary-700 ring-primary-200':
        variant === 'invisible',
      // Sizes
      'px-2 py-2': size === 'small',
      // disabled
      'border-neural-300 text-disabled ': variant === 'default' && disabled,
    },
    className
  );

  return (
    <button className={buttonClassName} onClick={onClick} {...props}>
      {Icon && <Icon size="20px" />}
      {children}
    </button>
  );
};
