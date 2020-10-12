import React from "react";

import {
  FeatureCard2Container,
  FeatureCard2Iconwrap,
  FeatureCard2Heading,
  FeatureCardIcon,
} from "./Features.styled";

const FeatureCard2 = ({ heading, ...image }) => {
  const { icon, icon2, icon3 } = image;
  return (
    <FeatureCard2Container>
      <FeatureCard2Iconwrap>
        <FeatureCardIcon src={icon} srcSet={`${icon2} 2x, ${icon3} 3x`} />
      </FeatureCard2Iconwrap>
      <FeatureCard2Heading>{heading}</FeatureCard2Heading>
    </FeatureCard2Container>
  );
};

export default FeatureCard2;
