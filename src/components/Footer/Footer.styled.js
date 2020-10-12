import styled from "styled-components/macro";
import { Description, Image, Row, Section1 } from "../../globalStyles";

export const FooterContainer = styled.footer`
  ${Section1}
  padding: 30px 0;
  background-color: ${({ theme }) => theme.colors.darkBg};
`;
export const FooterRow = styled.div`
  ${Row}
  max-width: 700px;
  margin: 0 auto;
  justify-content: space-evenly;
  /* align-items: center; */
`;
export const FooterIcon = styled.img`
  ${Image}
  cursor: pointer;
  transition: 0.3s all ease-in-out;
  &:hover {
    transform: scale(1.3);
    transition: 0.3s all ease-in-out;
  }
`;
export const FooterDesc = styled.p`
  ${Description}
  margin-top: 20px;
  cursor: pointer;
  transition: 0.3s all ease-in-out;
  text-transform: uppercase;
  &:hover {
    color: ${({ theme }) => theme.colors.highlight};
    transition: 0.3s all ease-in-out;
  }
`;
