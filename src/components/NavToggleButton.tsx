import React from 'react';
import { Menu, X } from 'react-feather';

type HTMLButtonProps = React.HTMLAttributes<HTMLButtonElement>;
interface NavToggleButtonProps {
  /**
   * Controls button icons (X or hamburger icon)
   * @default false
   */
  toggled: boolean;
  /** Callback to call on button click */
  onClick: () => void;
}

/** Navigation "Hamburger" button that will toggle menu */
export const NavToggleButton: React.FC<NavToggleButtonProps & HTMLButtonProps> = ({
  toggled = false,
  onClick,
  ...props
}) => {
  return (
    <button
      type="button"
      className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
      aria-label="toggle menu"
      onClick={onClick}
      {...props}
    >
      {toggled ? <X /> : <Menu />}
    </button>
  );
};
