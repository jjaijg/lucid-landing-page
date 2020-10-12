import React from "react";

import FeatureCard2 from "./FeatureCard2";

import {
  Feature2Container,
  FeatureRow,
  FeatureCol,
  FeatureQuote,
  FeatureHeading,
  FeatureLine,
  FeatureImageWrap,
  FeatureImage,
  FeatureDesc,
  FeatureDivider,
} from "./Features.styled";

const FeatureSec2 = ({
  darkText,
  quote,
  heading,
  description,
  features,
  line,
  ...rest
}) => {
  const { lineImg, lineImg2, lineImg3 } = line;
  const { devices, devices2, devices3 } = rest;
  return (
    <>
      <Feature2Container>
        <FeatureRow direction="row" reverse>
          <FeatureCol>
            <FeatureQuote>{quote}</FeatureQuote>
            <FeatureHeading margin={"15px"} darkText={darkText}>
              {heading}
            </FeatureHeading>
            <FeatureLine
              margin={"15px"}
              src={lineImg}
              srcSet={`${lineImg2} 2x, ${lineImg3} 3x`}
            />
            <FeatureDesc>{description}</FeatureDesc>
            <FeatureRow direction={"column"} start={"start"}>
              {features.map((feature, index) => (
                <FeatureCard2 key={`feature-card2-${index}`} {...feature} />
              ))}
            </FeatureRow>
          </FeatureCol>
          <FeatureCol>
            <FeatureImageWrap>
              <FeatureImage
                src={devices}
                srcSet={`${devices2} 2x, ${devices3} 3x`}
              />
            </FeatureImageWrap>
          </FeatureCol>
        </FeatureRow>
      </Feature2Container>
      <FeatureDivider />
    </>
  );
};

export default FeatureSec2;
