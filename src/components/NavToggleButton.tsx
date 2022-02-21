import React from 'react';
import { Menu, X } from 'react-feather';
import classNames from 'classnames';

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
  const buttonClassName = classNames(
    `focus:outline-none border-none px-3 py-1 font-medium transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700`,
    {
      'bg-btn-tint text-btn-tint-hover hover:bg-btn-tint dark:btn-tint': toggled,
    }
  );

  return (
    <button
      type="button"
      className={buttonClassName}
      aria-label="toggle menu"
      onClick={onClick}
      {...props}
    >
      {toggled ? <X /> : <Menu />}
    </button>
  );
};
