import * as React from 'react';
import styled from 'styled-components';
import Link from './Link';

export const links = [
  { href: '/', name: 'About' },
  { href: '/blog', name: 'Blog' },
  { href: '/projects', name: 'Projects' },
];

const NavWrapper = styled.nav`
  padding: 20px 0 0;
  background: transparent;
  margin: 0 auto;
  text-align: right;
  z-index: 100;
  a {
    margin: 0 12px;
    padding: 8px 0;
    font-size: 13px;
  }
`;

interface Props {
  className?: string;
}

/**
 * @name Nav
 * Header navigation
 * @render react
 * @example <Nav />
 */
class Nav extends React.PureComponent<Props> {
  /**
   * @private
   * @description Render nav items
   * @return {React.ReactElement<any>} Links list for navigation
   */
  private renderNavItems = (): Array<React.ReactElement<any>> =>
    links.map(({ href, name }) => (
      <Link
        to={href}
        key={name}
        activeStyle={{ fontWeight: 'bold' }}
        activeClassName="active"
      >
        {name}
      </Link>
    ));

  public render() {
    return (
      <NavWrapper className={this.props.className}>
        {this.renderNavItems()}
      </NavWrapper>
    );
  }
}

export default Nav;
