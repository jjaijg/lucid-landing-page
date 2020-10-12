import React from "react";

import { ContactContainer2, ContactBg, ImageBg } from "./Contact.styled";

const ContactSection2 = ({ map }) => {
  const { mapImg, mapImg2, mapImg3 } = map;
  return (
    <ContactContainer2>
      <ContactBg>
        <ImageBg src={mapImg} srcSet={`${mapImg2} 2x, ${mapImg3} 3x`} />
      </ContactBg>
    </ContactContainer2>
  );
};

export default ContactSection2;
