import { createGlobalStyle, css } from "styled-components/macro";

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding:0;
    margin:0;
    font-family: ${(props) => {
      console.log("Theme: ", props.theme);
      return props.theme.fonts[0];
    }}
  }

  body::-webkit-scrollbar {
  width: 7px;
  background: ${({ theme }) => theme.colors.darkBg};
}
 
body::-webkit-scrollbar-thumb {
  background-color: ${({ theme }) => theme.colors.highlight};
  border-radius: 5px;
}
`;

export const Section1 = css`
  color: ${({ theme }) => theme.colors.light};
  padding: 65px 0;
  background: ${({ theme }) => theme.colors.light};
`;

export const Row = css`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  flex-direction: row;
  /* flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")}; */
`;
export const Col = css`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;
export const TextWrapper = css`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

export const ImageWrapper = css`
  max-width: 500px;
  display: flex;
  justify-content: ${({ imagePos }) => (imagePos ? "flex-start" : "flex-end")};
`;
export const Image = css`
  max-width: 100%;
  max-height: 500px;
  padding-right: 0;
  vertical-align: middle;
  display: inline-block;
`;

export const Quote = css`
  font-size: 14px;
  font-weight: bold;
  line-height: 3.43;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.highlight};
`;

export const Title = css`
  font-size: 48px;
  font-weight: 600;
  line-height: 1.35;
  color: ${({ theme }) => theme.colors.light};

  @media screen and (max-width: 760px) {
    font-size: 40px;
  }
  @media screen and (max-width: 400px) {
    font-size: 32px;
  }
`;
export const SubTitle = css`
  font-size: 24px;
  font-weight: 600;
  line-height: 0.83;
  color: ${({ theme }) => theme.colors.light};

  @media screen and (max-width: 760px) {
    font-size: 20px;
  }
`;
export const SubTitle2 = css`
  font-size: 14px;
  font-weight: 600;
  line-height: 0.83;
  color: ${({ theme }) => theme.colors.light};

  @media screen and (max-width: 760px) {
    font-size: 12px;
  }
`;

export const Description = css`
  font-size: 18px;
  line-height: 1.44;
  color: ${({ theme }) => theme.colors.lightTextSec};
`;

export const Button = css`
  padding: 2px 15px;
  border-radius: 3.8px;
  border: none;
  box-shadow: 0 0 3px 0 rgba(3, 3, 3, 0.1);
  background-color: ${({ theme }) => theme.colors.highlight};
  font-size: 15px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 3.43;
  letter-spacing: 2px;
  text-align: center;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.light};
  cursor: pointer;
  outline: none;
  transition: 0.2s all ease-in-out;

  &:hover {
    transform: scale(1.1);
    opacity: 0.85;
    transition: 0.2s all ease-in-out;
  }

  @media screen and (max-width: 768px) {
    font-size: 13px;
  }
`;

export const Divider = css`
  height: 1px;
  background-color: ${({ theme }) => theme.colors.dividerColor};
`;
