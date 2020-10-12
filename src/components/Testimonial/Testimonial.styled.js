import styled from "styled-components/macro";

import * as globalCss from "../../globalStyles";

export const TestimonialContainer = styled.div`
  ${globalCss.Section1}
  background-color: ${({ theme }) => theme.colors.secondaryBg};
  height: 100vh;
`;
export const TestimonialRow = styled.div`
  ${globalCss.Row};
  align-items: ${({ start }) => (start ? start : "center")};
  flex-direction: ${({ direction, reverse }) =>
    reverse ? `${direction}-reverse` : direction};
  max-width: 1000px;
  margin: 0 auto;
`;
export const TestimonialRow2 = styled.div`
  ${globalCss.Row};
  align-items: ${({ start }) => (start ? start : "center")};
  flex-direction: ${({ direction, reverse }) =>
    reverse ? `${direction}-reverse` : direction};
  width: 100%;
  margin: 0 auto;
  background-color: transparent;
`;
export const TestimonialCol = styled.div`
  ${globalCss.Col};
  margin-top: 20px;
  max-width: 20%;
`;
export const TestimonialCol2 = styled.div`
  ${globalCss.Col};
  margin-top: 20px;
  text-align: center;
`;
export const TestimonialQuote = styled.p`
  ${globalCss.Quote}
  z-index: 1;
`;
export const TestimonialHeader = styled.h2`
  ${globalCss.Title}
  margin-bottom: ${({ margin }) => margin};
  color: ${({ theme, darkText }) => darkText && theme.colors.darkText};
  z-index: 1;
`;
export const TestimonialDesc = styled.p`
  ${globalCss.Description};
`;

export const TestimonialLine = styled.img`
  margin-bottom: ${({ margin }) => margin};
  max-width: 42px;
  z-index: 1;
`;

export const TestimonialCardContainer = styled.div`
  ${globalCss.Section1}
  padding: 30px 10px;
  position: relative;
  background: transparent;
`;
export const TestimonialImageWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border: ${({ theme }) => `solid 1px ${theme.colors.borderColor} `};
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: 50%;
  margin-bottom: ${({ iconBg }) => (iconBg ? "35px" : "15px")};
`;
export const TestimonialImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;
export const Name = styled.p`
  ${globalCss.Description}
  color: ${({ theme }) => theme.colors.lightTextSec};
`;
export const Role = styled.p`
  ${globalCss.Quote}
  color: ${({ theme }) => theme.colors.light};
`;

export const TestimonialBg = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
export const ImageBg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  -o-object-fit: cover;
  background: ${({ theme }) => theme.colors.darkBg};
`;

export const TestimonialFooter = styled.div`
  ${globalCss.Section1}
  position: absolute;
  /* bottom: 0; */
  z-index: 1;
  width: 100%;
  margin-top: 35px;
  padding: 19px 30px;
  background-color: ${({ theme }) => theme.colors.darkBg};
`;

export const TestimonialFooterDesc = styled.p`
  ${globalCss.Description};
  font-size: 24px;
`;
export const Highlight = styled.span`
  color: ${({ theme }) => theme.colors.highlight};
`;

export const TestimonialButton = styled.button`
  ${globalCss.Button}
`;

export const TestimonialButton2 = styled.button`
  ${globalCss.Button};
  background-color: transparent;
  border: solid 1px rgba(255, 255, 255, 0.2);
`;
