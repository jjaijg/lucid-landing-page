import React from "react";
import {
  PricingContainer,
  PricingRow,
  PricingQuote,
  PricingHeading,
  PricingLine,
  PricingCardsContainer,
} from "./Pricing.styled";
import PricingCard from "./PricingCard";

const Pricingsection = ({ darkText, quote, heading, line, pricings }) => {
  const { lineImg, lineImg2, lineImg3 } = line;
  return (
    <PricingContainer id="pricing">
      <PricingRow direction="column">
        <PricingQuote>{quote}</PricingQuote>
        <PricingHeading margin={"35px"} darkText={darkText}>
          {heading}
        </PricingHeading>
        <PricingLine
          margin={"35px"}
          src={lineImg}
          srcSet={`${lineImg2} 2x, ${lineImg3} 3x`}
        />
        <PricingCardsContainer>
          {pricings.map((pricing, index) => (
            <PricingCard key={`pricing-card-${index}`} {...pricing} />
          ))}
        </PricingCardsContainer>
      </PricingRow>
    </PricingContainer>
  );
};

export default Pricingsection;
