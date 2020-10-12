import React from "react";

import {
  HomeContainer,
  HomeBg,
  ImageBg,
  HomeContent,
  HomeQuote,
  HomeHeading,
  HomeDesc,
  HomeRow,
  HomeCol1,
  HomeCol2,
  HomeImgWrapper,
  HomeImg,
  HomeBtnWrapper,
  HomeButton1,
  HomeButton2,
} from "./HomeSection.styled";

const HomeSection = ({
  quote,
  heading,
  description,
  btnLabel1,
  btnLabel2,
  ...imgs
}) => {
  const { photo, photo2, photo3, devices, devices2, devices3 } = imgs;
  return (
    <HomeContainer id="home">
      <HomeBg>
        <ImageBg src={photo} srcSet={`${photo2} 2x, ${photo3} 3x`} />
      </HomeBg>
      <HomeContent>
        <HomeRow>
          <HomeCol1>
            <HomeQuote>{quote}</HomeQuote>
            <HomeHeading>{heading}</HomeHeading>
            <HomeDesc>{description}</HomeDesc>
            <HomeBtnWrapper>
              <HomeButton1>{btnLabel1}</HomeButton1>
              <HomeButton2 to="features">{btnLabel2}</HomeButton2>
            </HomeBtnWrapper>
          </HomeCol1>
          <HomeCol2>
            <HomeImgWrapper>
              <HomeImg
                src={devices}
                srcSet={`${devices2} 2x, ${devices3} 3x`}
              />
            </HomeImgWrapper>
          </HomeCol2>
        </HomeRow>
      </HomeContent>
    </HomeContainer>
  );
};

export default HomeSection;
