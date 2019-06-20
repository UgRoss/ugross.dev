import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import DarkModeToggle from './DarkModeToggle';

export const links = [
  { href: '/', name: 'About' },
  { href: '/blog', name: 'Blog' },
  { href: '/projects', name: 'Projects' },
];

const NavWrapper = styled.nav`
  background: transparent;
  margin: 0;
  margin-right: 10px;
  text-align: right;
  z-index: 100;
  a {
    margin: 0 12px;
    padding: 8px 0;
    font-size: 13px;
  }
`;

interface IProps {
  className?: string;
}

/**
 * @name Nav
 * Header navigation
 * @render react
 * @example <Nav />
 */
class Nav extends React.PureComponent<IProps> {
  /**
   * @private
   * @description Render nav items
   * @return {React.ReactElement<any>} Links list for navigation
   */
  private renderNavItems = (): React.ReactElement<Link<{}>>[] =>
    links.map(({ href, name }) => (
      <Link
        to={href}
        key={name}
        activeStyle={{ fontWeight: 'bold' }}
        activeClassName="active"
        className="with-underline"
      >
        {name}
      </Link>
    ));

  public render() {
    const { className } = this.props;
    return (
      <div
        style={{
          padding: '50px 0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <NavWrapper className={className}>{this.renderNavItems()}</NavWrapper>
        <DarkModeToggle />
      </div>
    );
  }
}

export default Nav;
