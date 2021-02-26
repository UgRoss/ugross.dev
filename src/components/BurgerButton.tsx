import React from 'react';
import { Menu, X } from 'react-feather';
import { Button } from '~/components/Button';

type HTMLButtonProps = React.HTMLAttributes<HTMLButtonElement>;

interface BurgerButtonProps {
  onClick: () => void;
  toggled: boolean;
}

export const BurgerButton: React.FC<BurgerButtonProps & HTMLButtonProps> = ({
  toggled,
  onClick,
  className = '',
  ...props
}) => {
  return (
    <Button type="button" className={className} onClick={onClick} buttonType="tint" {...props}>
      {toggled ? <X /> : <Menu />}
    </Button>
  );
};
