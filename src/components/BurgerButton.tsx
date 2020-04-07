import React from 'react';
import { Menu, X } from 'react-feather';

interface BurgerButtonProps {
  onClick: () => void;
  toggled: boolean;
}
type HTMLButtonProps = React.HTMLAttributes<HTMLButtonElement>;

export const BurgerButton: React.FC<BurgerButtonProps & HTMLButtonProps> = ({
  toggled,
  onClick,
  className = '',
  ...props
}) => {
  return (
    <button
      type="button"
      className={`button button--tint ${className}`}
      onClick={onClick}
      {...props}
    >
      {toggled ? <X /> : <Menu />}
    </button>
  );
};
