import React, { useState } from "react";
import { Button } from "../UI/Button/Button";
import { ExpenseForm } from "../expenses-form/ExpenseForm";
import styled from "styled-components";

const ContainerBtn = styled.div`
  width: 40rem;
  background-color: rgb(177, 180, 235);
  margin: 1rem auto;
  border-radius: 0.5rem;
`;
export const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);
  const render = () => {
    setShowForm((prevSatate) => {
      return !prevSatate;
    });
  };
  return showForm ? (
    <ExpenseForm onshowForm={render} addExpenseData={props.onaddExpenseData} />
  ) : (
    <ContainerBtn>
      <Button title="Add new consumption" onClick={render} />
    </ContainerBtn>
  );
};
