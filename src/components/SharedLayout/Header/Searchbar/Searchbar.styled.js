import { Form, Field } from 'formik';
import styled from 'styled-components';

export const SearchForm = styled(Form)`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 300px;
  border: 2px solid #dfe3ee;
  background-color: transparent;
  border-radius: 4px;
  overflow: hidden;
  order: 3;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    border-color: #f7f7f7;
  }
  /* @media (width <= 576px) {
    display: none;
  } */
`;

export const SearchFormButton = styled.button`
  background-color: #dfe3ee;
  padding: 0;
  color: #3b5998;
  width: 36px;
  height: 36px;
  border: 0;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  border-right: 2px solid #dfe3ee;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #f7f7f7;
  }

  svg {
    width: 25px;
    height: 25px;
    fill: #3b5998;
  }
`;

export const SearchFormLabel = styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;

export const SearchFormInput = styled(Field)`
  display: inline-block;
  width: 100%;
  font: inherit;
  color: #dfe3ee;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  background-color: transparent;
  color-scheme: dark;

  &::placeholder {
    background-color: transparent;
    color: #dfe3ee;
    font: inherit;
    font-size: 18px;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus {
    outline: 3px solid black;
  }
`;
