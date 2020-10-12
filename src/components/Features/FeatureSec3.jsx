import React from "react";

import {
  Feature3Container,
  FeatureRow,
  FeatureCol,
  FeatureCol2,
  FeatureQuote,
  FeatureHeading,
  FeatureLine,
  FeatureImageWrap,
  FeatureImage,
  FeatureDesc,
  FeatureDivider,
} from "./Features.styled";

const FeatureSec3 = ({
  darkText,
  quote,
  heading,
  description,
  features,
  line,
  ...rest
}) => {
  const { lineImg, lineImg2, lineImg3 } = line;
  const { iphone, iphone2, iphone3 } = rest;
  return (
    <>
      <Feature3Container>
        <FeatureRow direction="row">
          <FeatureCol2>
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
          </FeatureCol2>
          <FeatureCol>
            <FeatureImageWrap>
              <FeatureImage
                src={iphone}
                srcSet={`${iphone2} 2x, ${iphone3} 3x`}
              />
            </FeatureImageWrap>
          </FeatureCol>
        </FeatureRow>
      </Feature3Container>
      <FeatureDivider />
    </>
  );
};

export default FeatureSec3;
