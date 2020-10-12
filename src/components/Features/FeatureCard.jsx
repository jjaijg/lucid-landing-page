import React from "react";

import {
  FeatureCardContainer,
  FeatureCardIconwrap,
  FeatureCardIcon,
  FeatureCardHeading,
  FeatureCardDesc,
} from "./Features.styled";

const FeatureCard = ({ heading, description, noHeader, iconBg, ...image }) => {
  const { icon, icon2, icon3 } = image;
  return (
    <FeatureCardContainer>
      <FeatureCardIconwrap iconBg={iconBg}>
        <FeatureCardIcon src={icon} srcSet={`${icon2} 2x, ${icon3} 3x`} />
      </FeatureCardIconwrap>
      <FeatureCardHeading noHeader={noHeader}>{heading}</FeatureCardHeading>
      <FeatureCardDesc>{description}</FeatureCardDesc>
    </FeatureCardContainer>
  );
};

export default FeatureCard;
