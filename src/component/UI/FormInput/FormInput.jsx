import React from "react";

import styled from "styled-components";
const FormContainer = styled.div`
  width: 20rem;
  padding-top: 1rem;
  background-color: rgb(177, 180, 235);
`;
const Label = styled.label`
  margin: 1rem;
  text-align: left;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-weight: 700;
`;
const Input = styled.input`
  width: 15rem;
  height: 1.5rem;
  margin-left: 1rem;
  border-radius: 0.5rem;
  border: none;
  padding: 0.3rem;
  margin-bottom: 1rem;
`;
export const FormInput = ({
  id,
  labelName,
  inputType,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <FormContainer>
      <Label htmlFor={id}>{labelName}</Label>
      <Input
        type={inputType}
        placeholder={placeholder || ""}
        id={id}
        value={value}
        onChange={onChange}
        min="0"
      />
    </FormContainer>
  );
};
