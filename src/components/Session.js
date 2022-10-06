import styled from "styled-components";

function Session({ weekday, date, showtimes }) {
  return (
    <Container>
      {`${weekday} - ${date}`}
      <Buttons>
        {showtimes.map((time) => (
          <Button key={time.id}>
            {time.name}
          </Button>
        ))}
      </Buttons>
    </Container>
  );
}


const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
  font-size: 20px;
  box-sizing: border-box;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: left;
  margin-top: 20px;
  align-items: center;
`;

const Button = styled.div`
  display: flex;
  height: 32px;
  width: 64px;
  justify-content: center;
  align-items: center;
  margin: 2px 8px 8px 0;
  border-radius: 2px;
  background-color: #e8833a;
  font-size: 18px;
  &:hover {
    cursor: pointer;
  }
`;
