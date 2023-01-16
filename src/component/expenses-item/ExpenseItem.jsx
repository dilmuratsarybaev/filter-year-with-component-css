import styled from "styled-components";
const SectionItem = styled.section`
  padding: 1rem;
  margin: 0 auto;
`;
const ContainerParagraph = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(73, 72, 72);
`;
const Titlecontainer = styled.div`
  display: flex;
  align-items: center;
`;
const Date = styled.p`
  margin: 0.5rem;
  width: 4rem;
  border: 2px solid rgb(253, 250, 250);
  padding: 0.5rem;
  color: white;
  border-radius: 0.5rem;
  font-size: 0.4rem;
  background-color: rgb(51, 51, 52);
`;

const Titlepaper = styled.p`
  margin-left: 3rem;
  font-size: 1.3rem;
  color: white;
  font-family: Georgia, "Times New Roman", Times, serif;
  font-weight: 600;
`;
const Price = styled.p`
  margin-right: 1rem;
  font-size: 1rem;
  color: white;
  font-family: Georgia, "Times New Roman", Times, serif;
  border: 1px solid white;
  border-radius: 0.5rem;
  padding: 0.5rem;
  background-color: rgb(60, 6, 111);
`;
export const ExpenseItem = ({ expenses }) => {
  // console.log(expenses);
  return (
    <SectionItem>
      {expenses.map((element) => (
        <ContainerParagraph key={element.title}>
          <Titlecontainer>
            <Date>{element.date.toString()}</Date>
            <Titlepaper>{element.title}</Titlepaper>
          </Titlecontainer>
          <Price>{element.price} som</Price>
        </ContainerParagraph>
      ))}
    </SectionItem>
  );
};
