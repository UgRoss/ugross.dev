import { Link } from 'gatsby';
import styled from 'styled-components';

export const Nav = styled.nav<{ compact: boolean }>`
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

/** Navigation wrapper that will hide elements on mobile */
export const MobileCollapse = styled.div<{ collapsed: boolean }>`
  display: ${(props) => (props.collapsed ? 'block' : 'none')};
  width: 100%;
  order: 10;

  @media (min-width: 500px) {
    display: block;
    width: auto;
    order: unset;
  }
`;

export const Menu = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  margin: 0;

  @media (min-width: 500px) {
    flex-direction: row;
  }
`;

export const MenuItem = styled.li`
  margin: 0;
`;

export const MenuLink = styled(Link)`
  display: inline-flex;
  color: var(--button-tint-color);
  background-color: var(--button-tint-background);
  padding: var(--space-xxs) var(--space-sm);
  border-radius: var(--border-radius);
  margin: var(--space-xs);
  border: 0;

  &:visited {
    color: var(--button-tint-color);
  }

  &:hover,
  &.MenuLink--active {
    color: var(--button-tint-color-hover);
    background-color: var(--button-tint-background-hover);
  }
`;
