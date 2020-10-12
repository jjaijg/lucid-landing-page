import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDetails } from "../../state/reducers/contactReducer";

import {
  FormContainer,
  FormRow,
  FormCol,
  FormInput,
  FormTextArea,
  FormButton,
} from "./Contact.styled";

const ContactForm = () => {
  const dispatch = useDispatch();
  const { name, email, subject, message } = useSelector(
    (state) => state.contact
  );

  const onDetailsChange = (e) => {
    const { name, value } = e.target;
    dispatch(setDetails({ name, value }));
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
            value={name}
            onChange={onDetailsChange}
          />
          <FormInput
            id="email"
            name="email"
            type="email"
            placeholder="EMAIL *"
            value={email}
            onChange={onDetailsChange}
          />
          <FormInput
            id="subject"
            name="subject"
            type="text"
            placeholder="SUBJECT *"
            value={subject}
            onChange={onDetailsChange}
          />
        </FormCol>
        <FormCol>
          <FormTextArea
            id="message"
            name="message"
            placeholder="MESSAGE *"
            value={message}
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
