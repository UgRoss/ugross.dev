import React from 'react';
import { Menu, X } from 'react-feather';
import { Button } from '~/components/Button';

type HTMLButtonProps = React.HTMLAttributes<HTMLButtonElement>;
interface NavTogglerProps {
  /**
   * Controls button icons (X or hamburger icon)
   * @default false
   */
  toggled: boolean;
  /** Callback to call on button click */
  onClick: () => void;
}

/** Navigation "Hamburger" button that will toggle menu */
export const NavToggleButton: React.FC<NavTogglerProps & HTMLButtonProps> = ({
  toggled = false,
  onClick,
  className = '',
  ...props
}) => {
  return (
    <Button
      type="button"
      className={`${className} sm:hidden`}
      onClick={onClick}
      buttonType="tint"
      aria-label="Toggle Menu"
      {...props}
    >
      {toggled ? <X /> : <Menu />}
    </Button>
  );
};
