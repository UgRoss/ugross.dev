import styled from 'styled-components';

export const NavCollapse = styled.div<{ toggled: boolean }>`
  display: ${(props) => (props.toggled ? 'block' : 'none')};
  width: 100%;
  order: 10;

  @media (min-width: 500px) {
    display: block;
    width: auto;
    order: unset;
  }
`;

export const Nav = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  margin: 0;

  @media (min-width: 500px) {
    flex-direction: row;
  }
`;
