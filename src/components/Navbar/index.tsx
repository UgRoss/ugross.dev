import React, { useState, useEffect } from 'react';
import { useScroll } from '~/hooks/useScroll';
import { NoSSR } from '~/components/NoSSR';
import { DarkModeToggle } from '~/components/DarkModeToggle/DarkModeToggle';
import { NavToggleButton } from './components/NavToggleButton';
import { Nav, MobileCollapse, Menu, MenuItem, MenuLink } from './Navbar.styles';

interface NavbarProps {
  navLinks: Array<{ url: string; name: string; partiallyActive?: boolean }>;
}

export const Navbar: React.FC<NavbarProps> = ({ navLinks }) => {
  const [navToggled, toggleNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const position = useScroll(50);

  useEffect(() => {
    setScrolled(position.y > 100);
  }, [position]);

  return (
    <Nav compact={scrolled}>
      <div className="container flex flex-wrap items-center">
        <NavToggleButton toggled={navToggled} onClick={() => toggleNav(!navToggled)} />

        <MobileCollapse collapsed={navToggled}>
          <Menu>
            {navLinks.map(({ url, name, partiallyActive }) => (
              <MenuItem key={url}>
                <MenuLink to={url} partiallyActive={partiallyActive} activeClassName="MenuLink--active">
                  {name}
                </MenuLink>
              </MenuItem>
            ))}
          </Menu>
        </MobileCollapse>

        <div className="ml-auto">
          <NoSSR>
            <DarkModeToggle />
          </NoSSR>
        </div>
      </div>
    </Nav>
  );
};
