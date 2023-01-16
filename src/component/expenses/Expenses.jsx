import React, { useState } from "react";

import { ExpenseItem } from "../expenses-item/ExpenseItem";
import { ExpenseFilter } from "../expense-filter/ExpenseFilter";
import { Chart } from "../Chart/Chart";
import styled from "styled-components";

const ContainerExpenseForm = styled.ul`
  background-color: black;
  width: 40rem;
  padding: 1.5rem 0rem;
  margin: 0 auto;
  border-radius: 1rem;
`;
const ContainerMonths  = styled.p`
  padding: 1rem;
  background-color: antiquewhite;
  margin: 1rem;
  border-radius: 1rem;
`
export const Expenses = ({ expenses }) => {
  const maximumPrice = 5000;

  const months = [
    {
      label: "January",
      currentPrice: 0,
    },
    {
      label: "February",
      currentPrice: 0,
    },
    {
      label: "March",
      currentPrice: 0,
    },
    {
      label: "April",
      currentPrice: 0,
    },
    {
      label: "May",
      currentPrice: 0,
    },
    {
      label: "June",
      currentPrice: 0,
    },
    {
      label: "July",
      currentPrice: 0,
    },
    {
      label: "August",
      currentPrice: 0,
    },
    {
      label: "September",
      currentPrice: 0,
    },
    {
      label: "October",
      currentPrice: 0,
    },
    {
      label: "November",
      currentPrice: 0,
    },
    {
      label: "December",
      currentPrice: 0,
    },
  ];

  console.log(months);
  // console.log(props.expenses);
  const [selectedYear, setSelectdYear] = useState("2020");
  const yearChangeHandler = (event) => {
    setSelectdYear(event.target.value);
  };
  const filteredYearValue = expenses.filter((element) => {
    return new Date(element.date).getFullYear().toString() === selectedYear;
  });
  filteredYearValue.forEach((element) => {
    const monthsNumber = new Date(element.date).getMonth();
    console.log(monthsNumber);
    months[monthsNumber].currentPrice += +element.price;
  });
  // console.log(filteredYearValue);
  return (
    <ContainerExpenseForm>
      <ExpenseFilter
        value={selectedYear}
        onChange={yearChangeHandler}
        months={months}
        maximumPrice={maximumPrice}
        expenses={expenses}
      />
    <ContainerMonths>
        <Chart months={months} maximumPrice={maximumPrice} />
        </ContainerMonths>
      <ExpenseItem expenses={filteredYearValue} />
    </ContainerExpenseForm>
  );
};
