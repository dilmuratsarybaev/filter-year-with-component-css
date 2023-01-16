import React from "react";
import styled from "styled-components";
const AddBtn = styled.button`
  padding: 0.5rem 1rem;
  background-color: rebeccapurple;
  border-radius: 0.5rem;
  border: none;
  margin: 0.5rem;
  color: white;
  font-family: sans-serif;
  font-weight: 600;
`;

export const Button = (props) => {
  return <AddBtn onClick={props.onClick}>{props.title}</AddBtn>;
};
