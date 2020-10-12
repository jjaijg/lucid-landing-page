import styled from "styled-components/macro";

import { Link as LinkS } from "react-scroll";
import { FaBars } from "react-icons/fa";

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  height: 80px;
  margin-top: -80px;
  font-size: ${({ theme }) => theme.fontSizes.small};
  background: ${({ theme, scrollNav }) =>
    scrollNav ? theme.colors.darkBg : "transparent"};
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;
export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  width: 100%;
  padding: 0 25px;
  max-width: 1100px;
  /* z-index: 1; */
`;
export const NavLogo = styled(LinkS)`
  justify-self: flex-start;
  align-self: center;
  font-family: ${({ theme }) => theme.fonts[1]};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.light};
  margin-left: 20px;
  text-decoration: none;
  cursor: pointer;
`;

export const MobileIconWrapper = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: ${({ theme }) => theme.fontSizes.medium};
    cursor: pointer;
  }
`;

export const MobileIcon = styled(FaBars)`
  color: ${({ theme }) => theme.colors.light};
  transition: 0.3s ease;
  &:hover {
    color: ${({ theme }) => theme.colors.highlight};
    transition: 0.3s ease;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  text-align: center;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavItem = styled.li`
  height: 80px;
`;
export const NavLink = styled(LinkS)`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 1.3rem;
  color: ${({ theme }) => theme.colors.light};
  text-decoration: none;
  cursor: pointer;

  &.active {
    border-bottom: ${({ theme }) => `3px solid ${theme.colors.highlight}`};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.highlight};
  }
`;
