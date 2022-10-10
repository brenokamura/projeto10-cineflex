import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import styled from "styled-components";

function BoxContainer({ header = "", main = "", info = "", extra = "" }) {
  return (
    <>
      <Title>{header}</Title>
      <Info>
        {extra} {main}
      </Info>
      {info ? <Info>{info}</Info> : ""}
    </>
  );
}

export default function Success() {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state;

  const [clientData, setClientData] = useState([]);
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    setClientData([...state.info]);

    const title = state.movie.movie.title;
    const date = state.movie.day.date + " " + state.movie.name;
    setMovieData({ title, date });
  }, []);

  function backHome() {
    setClientData([]);
    setMovieData([]);
    navigate("/");
  }

  function formatDoc(doc) {
    return `${
      doc.substring(0, 3) +
      "." +
      doc.substring(3, 6) +
      "." +
      doc.substring(6, 9) +
      "-" +
      doc.substring(9)
    }`;
  }

  return (
    <Content>
      <TitleContainer>Pedido feito com sucesso!</TitleContainer>
      <Container>
        <BoxContainer
          data-identifier="movie-session-infos-reserve-finished"
          header="Filme e sessão"
          main={movieData.title ? movieData.title : ""}
          info={movieData.date ? movieData.date : "29/04/1994 23:55"}
        />
      </Container>
      <InfoContainer>
        {clientData.length &&
          clientData.map((client, index) => (
            <Container key={index}>
              <BoxContainer
                data-identifier="seat-infos-reserve-finished"
                header={"Ingresso"}
                main={client.idAssento}
                extra={"Assento"}
              />
              <BoxContainer
                data-identifier="buyer-infos-reserve-finished"
                header={"Comprador"}
                main={`Nome: ${client.nome}`}
                info={`CPF: ${formatDoc(client.cpf)}`}
              />
            </Container>
          ))}
      </InfoContainer>
      <Button data-identifier="back-to-home-btn" onClick={backHome}>
        Voltar para Home
      </Button>
    </Content>
  );
}

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 8vh auto;
  width: 100%;
  background-color: #ffffff;
  overflow-x: none;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-y: hidden;
`;

const Container = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  li {
    overflow-x: hidden;
  }
`;

const Info = styled.li`
  width: 80%;
  min-height: 30px;
  padding: 3px 20px;
  font-size: 22px;
`;

const Title = styled.li`
  width: 80%;
  min-height: 30px;
  font-weight: bold;
  font-size: 24px;
  padding: 3px 20px;
  padding-top: 16px;
  padding-bottom: 8px;
`;

const TitleContainer = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 100%;
  margin-top: 25px;
  text-align: center;
  font-size: 24px;
  color: #247a6b;
`;


const Button = styled.button`
  display: flex;
  height: 48px;
  width: 60%;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  margin-top: 25px;
  padding: 10px;
  border-radius: 5px;
  background-color: #e8833a;
  color: #ffffff;
  font-size: 18px;
  border: none;
  box-sizing: border-box;
  &:hover {
    cursor: pointer;
  }
`;
