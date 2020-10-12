import React from "react";
import FeatureCard from "../Features/FeatureCard";
import {
  ContactContainer,
  ContactHeader,
  ContactLine,
  ContactQuote,
  ContactRow,
  ContactRow1,
} from "./Contact.styled";
const ContactSection1 = ({ darkText, line, quote, heading, details }) => {
  const { lineImg, lineImg2, lineImg3 } = line;
  return (
    <ContactContainer>
      <ContactRow direction="column">
        <ContactQuote>{quote}</ContactQuote>
        <ContactHeader margin={"35px"} darkText={darkText}>
          {heading}
        </ContactHeader>
        <ContactLine
          margin={"35px"}
          src={lineImg}
          srcSet={`${lineImg2} 2x, ${lineImg3} 3x`}
        />
      </ContactRow>
      <ContactRow1>
        {details.map((detail, index) => (
          <FeatureCard
            key={`detail-card-${index}`}
            {...detail}
            noHeader={true}
            iconBg={false}
          />
        ))}
      </ContactRow1>
    </ContactContainer>
  );
};

export default ContactSection1;
