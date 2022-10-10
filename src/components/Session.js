import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Session({ weekday, date, showtimes }) {
  return (
    <SessionContainer data-identifier="session-date">
      {`${weekday} - ${date}`}
      <ButtonsContainer>
        {showtimes.map((time) => (
          <Button data-identifier="hour-minute-btn" key={time.id}>
            <Link
              style={{ textDecoration: "none", color: "#FFFFFF" }}
              to={`/assentos/${time.id}`}
            >
              {time.name}
            </Link>
          </Button>
        ))}
      </ButtonsContainer>
    </SessionContainer>
  );
}

const SessionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
  font-size: 20px;
  box-sizing: border-box;
`;

const ButtonsContainer = styled.div`
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
