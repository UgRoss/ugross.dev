import React from 'react';
import { Menu, X } from 'react-feather';

interface BurgerButtonProps {
  onClick: () => void;
  toggled: boolean;
}

export const BurgerButton: React.FC<
  BurgerButtonProps & React.HTMLAttributes<HTMLButtonElement>
> = ({ toggled, onClick, className = '', ...props }) => {
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
