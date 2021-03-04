import React, { useState, useEffect } from 'react';
import { DarkModeToggle } from '~/components/DarkModeToggle/DarkModeToggle';
import { NoSSR } from '~/components/NoSSR';
import { siteConfig } from '~/config/site.config';
import { useScroll } from '~/hooks/useScroll';
import Navbar from './components/Navbar';
import NavToggler from './components/NavToggler';
import { NavCollapse, Nav } from './components/Nav';
import { NavItem } from './components/NavItem';

export const Navigation: React.FC = () => {
  const [navToggled, toggleNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const position = useScroll(50);

  useEffect(() => {
    setScrolled(position.y > 100);
  }, [position]);

  return (
    <Navbar compact={scrolled}>
      <div className="container flex flex-wrap items-center">
        <NavToggler toggled={navToggled} onClick={() => toggleNav(!navToggled)} />

        <NavCollapse toggled={navToggled}>
          <Nav>
            {siteConfig.navItems.map(({ href, name, partiallyActive }) => (
              <NavItem href={href} title={name} partiallyActive={partiallyActive} key={href} />
            ))}
          </Nav>
        </NavCollapse>

        <NoSSR>
          <DarkModeToggle className="ml-auto" />
        </NoSSR>
      </div>
    </Navbar>
  );
};
