import React from "react";

import ContactForm from "./ContactForm";
import ConatctSection1 from "./ContactSection1";
import ConatctSection2 from "./ContactSection2";

const Contact = ({ map, ...section1Obj }) => {
  return (
    <div style={{ position: "relative" }}>
      <ConatctSection1 {...section1Obj} />
      <ConatctSection2 map={map} />
      <ContactForm />
    </div>
  );
};

export default Contact;
