import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

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
import { setScrollNav } from "../../state/reducers/navReducer";

const Navbar = ({ toggle }) => {
  const dispatch = useDispatch();
  const { scrollNav } = useSelector((state) => state.nav);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      dispatch(setScrollNav(true));
    } else {
      dispatch(setScrollNav(false));
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
