import React from "react";

import styled from "styled-components";

const ContainerFilter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  position: relative;
`;

const ParagraphOne = styled.p`
  color: white;
  font-size: 1.2rem;
  font-weight: 700;
  margin-left: 1rem;
`;
const SelectionYear = styled.select`
  padding: 0.3rem 1.5rem;
  border: 2px solid white;
  margin-right: 1rem;
  border-radius: 0.3rem;
`;
export const ExpenseFilter = ({ value, onChange }) => {
  return (
    <section>
      <ContainerFilter>
        <ParagraphOne>Filter by year</ParagraphOne>
        <p>
          <SelectionYear onChange={onChange} name="" id="" value={value}>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
          </SelectionYear>
        </p>
      </ContainerFilter>
    </section>
  );
};
