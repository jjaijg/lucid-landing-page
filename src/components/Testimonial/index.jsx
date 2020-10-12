import React from "react";
import Carousel from "react-elastic-carousel";
import "./style.css";

import {
  TestimonialContainer,
  TestimonialRow,
  TestimonialRow2,
  TestimonialQuote,
  TestimonialHeader,
  TestimonialLine,
  TestimonialBg,
  ImageBg,
  TestimonialFooter,
  Highlight,
  TestimonialButton,
  TestimonialCol,
  TestimonialCol2,
  TestimonialButton2,
  TestimonialFooterDesc,
} from "./Testimonial.styled";
import TestimonialCard from "./TestimonialCard";

const TestimonialSection = ({
  line,
  showImg,
  quote,
  heading,
  testimonials,
}) => {
  const { photo, photo2, photo3 } = showImg;
  const { lineImg, lineImg2, lineImg3 } = line;
  return (
    <>
      <TestimonialContainer>
        <TestimonialBg>
          <ImageBg src={photo} srcSet={`${photo2} 2x, ${photo3} 3x`} />
        </TestimonialBg>
        <TestimonialRow direction="column">
          <TestimonialQuote margin={"30px"}>
            {quote || "Testimonial quote"}
          </TestimonialQuote>
          <TestimonialHeader margin={"25px"}>
            {heading || "Testimonial"}
          </TestimonialHeader>
          <TestimonialLine
            margin={"25px"}
            src={lineImg}
            srcSet={`${lineImg2} 2x, ${lineImg3} 3x`}
          />
        </TestimonialRow>
        <TestimonialRow>
          <Carousel
            enableAutoPlay
            itemsToShow={2}
            itemsToScroll={2}
            showArrows={false}
            transitionMs={3000}
            breakPoints={[
              { width: 1, itemsToShow: 1, itemsToScroll: 1 },
              { width: 550, itemsToShow: 1, itemsToScroll: 1 },
              { width: 768, itemsToShow: 2, itemsToScroll: 2 },
            ]}
          >
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={`testimonial-card-${index}`}
                {...testimonial}
              />
            ))}
          </Carousel>
        </TestimonialRow>
      </TestimonialContainer>
    </>
  );
};

export default TestimonialSection;
