import React from "react";

import {
  TestimonialCardContainer,
  TestimonialRow,
  TestimonialCol,
  TestimonialCol2,
  TestimonialDesc,
  TestimonialImageWrap,
  TestimonialImage,
  Name,
  Role,
} from "./Testimonial.styled";

const TestimonialCard = ({ avatar, description, name, role }) => {
  const { icon, icon2, icon3 } = avatar;
  return (
    <TestimonialCardContainer>
      <TestimonialRow>
        <TestimonialDesc>{description}</TestimonialDesc>
      </TestimonialRow>
      <TestimonialRow>
        <TestimonialCol>
          <TestimonialImageWrap>
            <TestimonialImage src={icon} srcSet={`${icon2} 2x, ${icon3} 3x`} />
          </TestimonialImageWrap>
        </TestimonialCol>
        <TestimonialCol2>
          <Name>{name}</Name>
          <Role>{role}</Role>
        </TestimonialCol2>
      </TestimonialRow>
    </TestimonialCardContainer>
  );
};

export default TestimonialCard;
