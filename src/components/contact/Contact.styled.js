import styled from "styled-components/macro";

import { Title, Row, Col, Quote, Section1, Button } from "../../globalStyles";

export const ContactContainer = styled.div`
  ${Section1};
  height: 720px;
  background: ${({ theme }) => theme.colors.secondaryBg};
`;
export const ContactRow = styled.div`
  ${Row};
  align-items: ${({ start }) => (start ? start : "center")};
  flex-direction: ${({ direction, reverse }) =>
    reverse ? `${direction}-reverse` : direction};
`;
export const ContactRow1 = styled.div`
  max-width: 1200px;
  margin: 15px auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;
export const ContactQuote = styled.p`
  ${Quote}
`;
export const ContactHeader = styled.h2`
  ${Title}
  margin-bottom: ${({ margin }) => margin};
  color: ${({ theme, darkText }) => darkText && theme.colors.darkText};
`;
export const ContactLine = styled.img``;

export const ContactContainer2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 380px;
  background: ${({ theme }) => theme.colors.darkBg};
  position: relative;
`;
export const ContactBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
`;
export const ImageBg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  -o-object-fit: cover;
  background: ${({ theme }) => theme.colors.darkBg};
`;

export const FormContainer = styled.div`
  max-width: 700px;
  position: absolute;
  left: 50%;
  margin-left: -350px;
  top: 50%;
  margin-top: -100px;
  padding: 20px 30px;
  background: ${({ theme }) => theme.colors.darkText};
  z-index: 3;

  @media screen and (max-width: 770px) {
    position: relative;
    width: 100%;
    left: 0%;
    max-width: none;
    margin: auto;
  }
`;
export const FormRow = styled.div`
  ${Row}
`;
export const FormCol = styled.div`
  ${Col}
`;
export const FormInput = styled.input`
  padding: 5px 15px;
  height: 50px;
  font-size: 16px;
  font-weight: bold;
  width: 100%;
  margin: 10px auto;
  letter-spacing: 1.5px;
  color: ${({ theme }) => theme.colors.light};
  background: transparent;
  border: solid 1px rgba(255, 255, 255, 0.2);
  &:focus {
    outline: none;
  }

  @media screen and (max-width: 768px) {
    height: 35px;
  }
`;
export const FormTextArea = styled.textarea`
  padding: 5px 15px;
  letter-spacing: 1.5px;
  height: 190px;
  font-size: 16px;
  font-weight: bold;
  margin: 10px auto;
  color: ${({ theme }) => theme.colors.light};
  background: transparent;
  border: solid 1px rgba(255, 255, 255, 0.2);
  &:focus {
    outline: none;
  }
  width: 100%;

  @media screen and (max-width: 768px) {
    height: 150px;
  }
`;
export const FormButton = styled.button`
  ${Button};
  background-color: transparent;
  border: solid 1px rgba(255, 255, 255, 0.2);
  margin: 10px auto;
  margin-right: 15px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.highlight};
  }

  @media screen and (max-width: 768px) {
    margin: 10px auto;
  }
`;
