import styled from "styled-components/macro";
import {
  Section1,
  SubTitle,
  Button,
  Row,
  Quote,
  Title,
} from "../../globalStyles";

export const PricingContainer = styled.section`
  ${Section1};
  color: ${({ theme }) => theme.colors.darkText};
`;
export const PricingRow = styled.div`
  ${Row};
  align-items: ${({ start }) => (start ? start : "center")};
  flex-direction: ${({ direction, reverse }) =>
    reverse ? `${direction}-reverse` : direction};
`;
export const PricingQuote = styled.p`
  ${Quote}
`;
export const PricingHeading = styled.h2`
  ${Title}
  margin-bottom: ${({ margin }) => margin};
  color: ${({ theme, darkText }) => darkText && theme.colors.darkText};
`;
export const PricingLine = styled.img`
  margin-bottom: ${({ margin }) => margin};
  max-width: 42px;
`;
export const PricingCardsContainer = styled.div`
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
export const PricingCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: ${({ theme }) => `1px solid ${theme.colors.borderColor}`};
  /* height: 500px; */
`;
export const PricingPlan = styled.h2`
  ${SubTitle}
  text-align: center;
  text-transform: uppercase;
  justify-self: center;
  width: 100%;
  height: 70px;
  padding: 25px;
  color: ${({ theme }) => theme.colors.darkText};
`;
export const PricingHeaderWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #999999;
  width: 100%;
  height: 150px;

  background: ${({ theme, hover }) =>
    hover ? theme.colors.highlight : theme.colors.light};
  color: ${({ theme, hover }) =>
    hover ? theme.colors.light : theme.colors.highlight};
  transition: 0.3s all ease-in-out;
`;
export const PricingDollar = styled.sup`
  font-size: 30px;
`;
export const PricingAmount = styled.h1`
  color: ${({ theme, hover }) =>
    hover ? theme.colors.light : theme.colors.darkText};
  font-size: 60px;
  font-weight: 600;
  line-height: 0.33;
  margin-top: 10px;
  margin-bottom: 10px;
`;
export const PricingValidity = styled.p`
  color: ${({ theme, hover }) =>
    hover ? theme.colors.light : theme.colors.lightTextSec};
  line-height: 1.56;
  font-size: 18px;
  margin-top: 5px;
`;
export const PricingFooterWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 270px;
`;
export const PricingDesc = styled.p`
  color: ${({ theme }) => theme.colors.lightTextSec};
  line-height: 1.56;
  font-size: 18px;
  text-align: center;
  padding: 0 25px;
`;
export const PricingButton = styled.button`
  ${Button};
  margin-top: 15px;
  line-height: 3.43;
  font-size: 14px;
  background: ${({ theme, hover }) =>
    hover ? theme.colors.highlight : theme.colors.light};
  color: ${({ theme, hover }) =>
    hover ? theme.colors.light : theme.colors.highlight};
  transition: 0.3s all ease-in-out;
`;
