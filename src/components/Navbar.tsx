import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { NavItem } from '~/components/NavItem';
import { BurgerButton } from '~/components/BurgerButton';
import { DarkModeToggle } from '~/components/DarkModeToggle';
import { NoSSR } from '~/components/NoSSR';
import { siteConfig } from '~/config/site.config';
import { useScroll } from '~/hooks/useScroll';

export const Navbar: React.FC = () => {
  const [navToggled, toggleNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const position = useScroll(200);

  useEffect(() => {
    setScrolled(position.y > 20);
  }, [position]);

  return (
    <nav className={classNames('Navbar', { 'Navbar--scrolled': scrolled })}>
      <div className="Navbar__container">
        <BurgerButton
          toggled={navToggled}
          onClick={() => toggleNav(!navToggled)}
          className="Navbar__toggler"
        />
        <NoSSR>
          <DarkModeToggle />
        </NoSSR>
        <div className={classNames('Navbar__collapse', { 'Navbar__collapse--show': navToggled })}>
          <ul className="Navbar__nav">
            {siteConfig.navItems.map(({ href, name, partiallyActive }) => (
              <li key={href} className="Navbar__item">
                <NavItem href={href} title={name} partiallyActive={partiallyActive} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
