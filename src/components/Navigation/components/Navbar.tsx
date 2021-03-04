import styled from 'styled-components';

const Navbar = styled.nav<{ compact: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  width: 100%;
  transition: height 0.3s ease-in;
  background: var(--color-nav);
  padding: 0.8em;
  box-shadow: 1px 2px 18px rgba(0, 0, 0, 0.1);

  @media (min-width: 550px) {
    padding: 0.5rem;
    height: ${(props) => (props.compact ? 'var(--height-navbar-compact)' : 'var(--height-navbar)')};
  }
`;

export default Navbar;
