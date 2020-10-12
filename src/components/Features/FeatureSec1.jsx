import React from "react";

import FeatureCard from "./FeatureCard";

import {
  FeatureContainer,
  FeatureRow,
  FeatureRow1,
  FeatureQuote,
  FeatureHeading,
  FeatureLine,
  FeatureDivider,
} from "./Features.styled";

const FeatureSec1 = ({ darkText, quote, heading, features, ...rest }) => {
  const { lineImg, lineImg2, lineImg3 } = rest;
  return (
    <>
      <FeatureDivider />
      <FeatureContainer>
        <FeatureRow direction="column">
          <FeatureQuote>{quote}</FeatureQuote>
          <FeatureHeading margin={"35px"} darkText={darkText}>
            {heading}
          </FeatureHeading>
          <FeatureLine
            margin={"35px"}
            src={lineImg}
            srcSet={`${lineImg2} 2x, ${lineImg3} 3x`}
          />
        </FeatureRow>
        <FeatureRow1>
          {features.map((feature, index) => (
            <FeatureCard
              key={`feature-card-${index}`}
              {...feature}
              noHeader={false}
              iconBg={true}
            />
          ))}
        </FeatureRow1>
      </FeatureContainer>
      <FeatureDivider />
    </>
  );
};

export default FeatureSec1;
