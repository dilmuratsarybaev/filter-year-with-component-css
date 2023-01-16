import React from "react";
import styled from "styled-components";

const Containerchart = styled.div`
  display: flex;
  text-align: center;
  font-size: 0.5rem;
  justify-content: space-around;
  height: 10rem;
  
`;

const Chartbar = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ChartBarInner = styled.div`
  height: 100%;
  width: 100%;
  border: 1px solid black;
  border-radius: 12px;
  background-color: rgb(174, 109, 235);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const ChartBarFill = styled.div`
  background-color: blue;
  width: 100%;
  transition: all 0.3s ease-out;
`;
const ChartBarLabel = styled.p`
  font-weight: bold;
  font-size: 0.5rem;
  text-align: center;
`;
export const Chart = ({ months, maximumPrice }) => {
  // console.log(maximumPrice);
  // console.log(months);
  return (
    <Containerchart>
      {months.map((element) => {
        const fillheight = (+element.currentPrice * 100) / maximumPrice;
        return (
          <Chartbar key={element.label}>
            <ChartBarInner>
              <ChartBarFill style={{ height: `${fillheight}%` }}></ChartBarFill>
            </ChartBarInner>
            <ChartBarLabel>{element.label}</ChartBarLabel>
          </Chartbar>
        );
      })}
    </Containerchart>
  );
};
