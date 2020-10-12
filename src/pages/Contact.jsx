import React from "react";
import { ContactSection } from "../components";

import { CONTACT_OBJ } from "../data";

const Contact = () => {
  return (
    <section id="contact">
      <ContactSection {...CONTACT_OBJ} />
    </section>
  );
};

export default Contact;
