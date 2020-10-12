import React from "react";

import {
  FooterContainer,
  FooterDesc,
  FooterIcon,
  FooterRow,
} from "./Footer.styled";

const index = ({ icons }) => {
  return (
    <FooterContainer id="footer">
      <FooterRow>
        {icons.map(({ icon, icon2, icon3 }, index) => (
          <FooterIcon
            key={`footer-icon-${index}`}
            src={icon}
            srcSet={`${icon2} 2x, ${icon3} 3x`}
          />
        ))}
      </FooterRow>
      <FooterRow>
        <FooterDesc>copyright © 2014 lucid onepage theme</FooterDesc>
      </FooterRow>
    </FooterContainer>
  );
};

export default index;
