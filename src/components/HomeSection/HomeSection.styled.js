import styled from "styled-components/macro";

import { Link as LinkS } from "react-scroll";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";
import * as globalCss from "../../globalStyles";

export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 100vh;
  background: ${({ theme }) => theme.colors.darkBg};
  position: relative;
`;

export const HomeBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
`;
export const ImageBg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  -o-object-fit: cover;
  background: ${({ theme }) => theme.colors.darkBg};
`;

export const HomeContent = styled.div`
  bottom: 0%;
  max-width: 1060px;
  padding: 0 25px;
  z-index: 3;
  height: 100%;

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;

export const HomeRow = styled.div`
  ${globalCss.Row};
  display: flex;
  height: 100%;
`;
export const HomeCol1 = styled.div`
  ${globalCss.Col}
  /* align-self: flex-start; */
  padding-top: 40px;

  @media screen and (max-width: 768px) {
    flex-direction: column;

    justify-content: center;
    text-align: center;
  }
`;
export const HomeCol2 = styled.div`
  ${globalCss.Col}
  align-self: flex-end;
  margin-bottom: 0px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const HomeHeading = styled.h1`
  ${globalCss.Title}
  margin-bottom: 15px;

  @media screen and (max-width: 980px) {
    font-size: 24px;
    margin-bottom: 20px;
  }
`;

export const HomeQuote = styled.p`
  ${globalCss.Quote}
`;

export const HomeDesc = styled.p`
  ${globalCss.Description}
  @media screen and (max-width: 760px) {
    font-size: ${({ theme }) => theme.fontSizes.small};
  }
`;

export const HomeImgWrapper = styled.div`
  ${globalCss.ImageWrapper}
`;
export const HomeImg = styled.img`
  ${globalCss.Image};
`;

export const HomeBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

export const HomeButton1 = styled.button`
  ${globalCss.Button};
  margin-right: 20px;
`;
export const HomeButton2 = styled(LinkS)`
  ${globalCss.Button};
  background-color: transparent;
  border: solid 1px rgba(255, 255, 255, 0.2);
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;
