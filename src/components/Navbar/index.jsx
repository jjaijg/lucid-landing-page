import React, { useState, useEffect } from "react";

import { animateScroll as scroll } from "react-scroll";

import {
  Nav,
  NavContainer,
  NavLogo,
  MobileIconWrapper,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLink,
} from "./Navbar.styled";

import { SCROLL_OBJ, NAV_LINKS } from "../../data";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <Nav scrollNav={scrollNav}>
      <NavContainer>
        <NavLogo to="/" onClick={toggleHome}>
          LUCID
        </NavLogo>
        <MobileIconWrapper onClick={toggle}>
          <MobileIcon />
        </MobileIconWrapper>
        <NavMenu>
          {NAV_LINKS.map(({ name, to }, index) => (
            <NavItem key={`${to}-${index}`}>
              <NavLink to={to} {...SCROLL_OBJ}>
                {name}
              </NavLink>
            </NavItem>
          ))}
        </NavMenu>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
