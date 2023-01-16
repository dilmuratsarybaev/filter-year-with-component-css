import React, { useState } from "react";
import { FormInput } from "../UI/FormInput/FormInput";
import { Button } from "../UI/Button/Button";
import styled from "styled-components";

const Section = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;
const FormSection = styled.form`
  background-color: rgb(177, 180, 235);
  width: 40rem;
  border-radius: 1rem;
  margin-bottom: 2rem;
`;
const FirstDiv = styled.div`
  display: flex;
`;

const SecondDiv = styled.div`
  display: flex;
  box-sizing: border-box;
  justify-content: flex-end;
  margin-right: 1rem;
  margin-bottom: 0.5rem;
`;

export const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");

  // console.log(title);

  const titleInputChange = (event) => {
    setTitle(event.target.value);
  };

  const priceInputChange = (event) => {
    setPrice(event.target.value);
  };

  const dateInputChange = (event) => {
    setDate(event.target.value);
  };
  const cancelHandler = (event) => {
    event.preventDefault();
    props.onshowForm();
  };
  const saveHandler = (event) => {
    event.preventDefault();
    if (
      title.trim().length !== 0 &&
      price.trim().length !== 0 &&
      date.trim().length !== 0
    ) {
      const expenseData = {
        title,
        price,
        date,
      };
      // console.log(expenseData);
      props.addExpenseData(expenseData);
    }
    setTitle("");
    setPrice("");
    setDate("");
  };
  return (
    <Section>
      <FormSection>
        <FirstDiv>
          <FormInput
            labelName="Title"
            id="firstLabel"
            inputType="text"
            placeholder="Write....."
            value={title}
            onChange={titleInputChange}
          />
          <FormInput
            labelName="Amount"
            id="secondLabel"
            inputType="number"
            value={price}
            onChange={priceInputChange}
          />
        </FirstDiv>
        <FormInput
          labelName="Date"
          id="thridLabel"
          inputType="date"
          placeholder="DD.MM.YYYY"
          value={date}
          onChange={dateInputChange}
          type="date"
          max="2023-12-31"
        />
        <SecondDiv>
          <Button title="Cancel" onClick={cancelHandler} />
          <Button title="Add consumption" onClick={saveHandler}></Button>
        </SecondDiv>
      </FormSection>
    </Section>
  );
};
