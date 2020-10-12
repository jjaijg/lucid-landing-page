import styled from "styled-components/macro";

import { FaTimes } from "react-icons/fa";
import { Link as LinkS } from "react-scroll";

export const SidebarContainer = styled.aside`
  position: fixed;
  display: grid;
  align-items: center;
  background: ${({ theme: { colors } }) => colors.darkBg};
  width: 100%;
  height: 100%;
  left: 0;
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  z-index: 999;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  outline: none;
  cursor: pointer;
`;

export const CloseIcon = styled(FaTimes)`
  color: ${({ theme: { colors } }) => colors.light};
  transition: 0.2s ease-in-out;

  &:hover {
    color: ${({ theme: { colors } }) => colors.highlight};
    transition: 0.2s ease-in-out;
  }
`;

export const SidebarWrapper = styled.div`
  color: ${({ theme: { colors } }) => colors.light};
`;

export const SidebarMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(4, 60px);
  }
`;
export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  list-style: none;
  color: ${({ theme: { colors } }) => colors.light};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  transition: 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    color: ${({ theme: { colors } }) => colors.highlight};
    transition: 0.2s ease-in-out;
  }
`;
