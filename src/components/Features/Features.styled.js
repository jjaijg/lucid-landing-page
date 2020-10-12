import styled from "styled-components/macro";
import {
  Section1,
  Row,
  Col,
  Quote,
  Title,
  SubTitle,
  SubTitle2,
  Description,
  Divider,
  ImageWrapper,
  Image,
} from "../../globalStyles";

export const FeatureDivider = styled.div`
  ${Divider};
  width: 100%;
`;
export const FeatureContainer = styled.div`
  ${Section1};
  color: ${({ theme }) => theme.colors.darkText};
`;

export const FeatureRow = styled.div`
  ${Row};
  align-items: ${({ start }) => (start ? start : "center")};
  flex-direction: ${({ direction, reverse }) =>
    reverse ? `${direction}-reverse` : direction};
`;
export const FeatureCol = styled.div`
  ${Col}
`;

export const FeatureQuote = styled.p`
  ${Quote}
`;
export const FeatureHeading = styled.h2`
  ${Title}
  margin-bottom: ${({ margin }) => margin};
  color: ${({ theme, darkText }) => darkText && theme.colors.darkText};
`;
export const FeatureDesc = styled.p`
  ${Description}
  margin-bottom: 15px;
`;

export const FeatureLine = styled.img`
  margin-bottom: ${({ margin }) => margin};
  max-width: 42px;
`;

export const FeatureImageWrap = styled.div`
  ${ImageWrapper}
`;
export const FeatureImage = styled.img`
  ${Image};
`;

export const FeatureRow1 = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;
export const FeatureCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
`;
export const FeatureCardIconwrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 88px;
  height: 88px;
  border: ${({ theme, iconBg }) =>
    iconBg ? `solid 1px ${theme.colors.borderColor} ` : "none"};
  background-color: ${({ theme, iconBg }) =>
    iconBg ? theme.colors.light : "transparent"};
  border-radius: 50%;
  margin-bottom: ${({ iconBg }) => (iconBg ? "35px" : "15px")};
`;
export const FeatureCardIcon = styled.img``;
export const FeatureCardHeading = styled.h2`
  ${SubTitle};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: 35px;
  display: ${({ noHeader }) => (noHeader ? "none" : "block")};
`;
export const FeatureCardDesc = styled.p`
  ${Description}
  text-align: center;
`;

export const Feature2Container = styled.div`
  ${Section1};
  color: ${({ theme }) => theme.colors.darkText};
  max-width: 1050px;
`;
export const FeatureCard2Container = styled(FeatureCardContainer)`
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;
`;
export const FeatureCard2Iconwrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 17px;
  height: 16px;
  border: none;
  background-color: ${({ theme }) => theme.colors.light};
  margin-right: 10px;
`;
export const FeatureCard2Heading = styled.h3`
  ${SubTitle2};
  color: ${({ theme }) => theme.colors.darkText};
`;

export const Feature3Container = styled.div`
  ${Section1};
  color: ${({ theme }) => theme.colors.darkText};
  background: ${({ theme }) => theme.colors.secondaryBg};
  padding-left: 100px;

  @media screen and (max-width: 768px) {
    padding-left: 0px;
  }
`;
export const Feature2Heading = styled.h2`
  ${SubTitle}
  margin-bottom: ${({ margin }) => margin};
  color: ${({ theme, darkText }) => darkText && theme.colors.darkText};
`;
export const FeatureCol2 = styled.div`
  ${Col}
  max-width: 45%;
`;
