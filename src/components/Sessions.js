import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Session from "./Session";
import Footer from "./Footer";

const BASE_URL = "https://mock-api.driven.com.br/api/v5/cineflex/";

export default function Sessions() {
  const { idMovie } = useParams();
  const [filme, setFilme] = useState([]);
  const [session, setSession] = useState([]);

  useEffect(() => {
    const promise = axios.get(BASE_URL + `movies/${idMovie}/showtimes`);
    promise.then((response) => {
      setFilme(response.data);
      setSession(response.data.days);
    });
  }, []);

  return (
    <Content>
      <TitleContainer>Selecione o horário</TitleContainer>
      {session.map((item) => (
        <Session
          key={item.id}
          weekday={item.weekday}
          date={item.date}
          showtimes={item.showtimes}
        />
      ))}
      <Footer title={filme.title} poster={filme.posterURL} />
    </Content>
  );
}

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10vh auto;
  margin-bottom: 14vh;
  width: 100%;
  background-color: #ffffff;
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
`;
