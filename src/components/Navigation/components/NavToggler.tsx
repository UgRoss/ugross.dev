import styled from 'styled-components';
import { BurgerButton } from './BurgerButton';

const NavToggler = styled(BurgerButton)`
  @media (min-width: 500px) {
    display: none;
  }
`;

export default NavToggler;
