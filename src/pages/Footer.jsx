import React from "react";
import { FooterSection } from "../components";

import { FOOTER_OBJ } from "../data";

const Footer = () => {
  return (
    <>
      <FooterSection {...FOOTER_OBJ} />
    </>
  );
};

export default Footer;
