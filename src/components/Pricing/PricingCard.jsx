import React, { useState } from "react";
import {
  PricingCardContainer,
  PricingPlan,
  PricingHeaderWrap,
  PricingAmount,
  PricingValidity,
  PricingDesc,
  PricingFooterWrap,
  PricingButton,
  PricingDollar,
} from "./Pricing.styled";

const PricingCard = ({ plan, amount, validity, description, btnLabel }) => {
  const [hover, setHover] = useState(false);

  const toggleHover = () => setHover(!hover);

  return (
    <PricingCardContainer onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
      <PricingPlan>{plan}</PricingPlan>
      <PricingHeaderWrap hover={hover}>
        <PricingAmount hover={hover}>
          <PricingDollar>$</PricingDollar>
          {amount}
        </PricingAmount>
        <PricingValidity hover={hover}>\per {validity}</PricingValidity>
      </PricingHeaderWrap>
      <PricingFooterWrap>
        <PricingDesc>{description}</PricingDesc>
        <PricingButton hover={hover}>{btnLabel}</PricingButton>
      </PricingFooterWrap>
    </PricingCardContainer>
  );
};

export default PricingCard;
