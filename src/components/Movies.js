import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Movie from "./Movie";

export default function Movies() {
  const [filmes, setFilmes] = useState(null);

  useEffect(() => {
    const requisicao = axios.get(
      "https://mock-api.driven.com.br/api/v5/cineflex/movies"
    );

    requisicao.then((resposta) => {
      setFilmes(resposta.data);
    });
  }, []);

  if (filmes === null) {
    return <span>Carregando</span>;
  }
  return (
    <>
      <TitleContainer>Selecione o filme</TitleContainer>
      <MoviesContainer>
        {filmes.map((filme) => (
          <Movie
            posterURL={filme.posterURL}
            title={filme.title}
            id={filme.id}
            key={filme.overview}
          />
        ))}
      </MoviesContainer>
    </>
  );
}

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 110px;
  margin-top: 67px;
  font-family: Roboto;
  font-size: 24px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0.04em;
  text-align: center;
  color: #293845;
`;

const MoviesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  height: 100vh;
  padding: 5px;
  gap: 25px 25px;
  margin: 5px 40px;
`;