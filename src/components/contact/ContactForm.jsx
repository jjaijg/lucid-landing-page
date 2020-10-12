import React, { useState } from "react";

import {
  FormContainer,
  FormRow,
  FormCol,
  FormInput,
  FormTextArea,
  FormButton,
} from "./Contact.styled";

const ContactForm = () => {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const onDetailsChange = (e) => {
    const { name, value } = e.target;
    setContactForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <FormContainer>
      <FormRow>
        <FormCol>
          <FormInput
            id="name"
            name="name"
            type="text"
            placeholder="NAME *"
            value={contactForm.name}
            onChange={onDetailsChange}
          />
          <FormInput
            id="email"
            name="email"
            type="email"
            placeholder="EMAIL *"
            value={contactForm.email}
            onChange={onDetailsChange}
          />
          <FormInput
            id="subject"
            name="subject"
            type="text"
            placeholder="SUBJECT *"
            value={contactForm.subject}
            onChange={onDetailsChange}
          />
        </FormCol>
        <FormCol>
          <FormTextArea
            id="message"
            name="message"
            placeholder="MESSAGE *"
            value={contactForm.message}
            onChange={onDetailsChange}
          />
        </FormCol>
      </FormRow>
      <FormRow>
        <FormButton>send message</FormButton>
      </FormRow>
    </FormContainer>
  );
};

export default ContactForm;
