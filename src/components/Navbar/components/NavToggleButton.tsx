import React from 'react';
import styled from 'styled-components';
import { Menu, X } from 'react-feather';
import { Button } from '~/components/Button';

/** Button that is shown only on mobile screens */
const MobileOnlyButton = styled(Button)`
  @media (min-width: 500px) {
    display: none;
  }
`;

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
    <MobileOnlyButton
      type="button"
      className={className}
      onClick={onClick}
      buttonType="tint"
      aria-label="Toggle Menu"
      {...props}
    >
      {toggled ? <X /> : <Menu />}
    </MobileOnlyButton>
  );
};
