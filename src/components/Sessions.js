import { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';
import styled from "styled-components"
import Session from './Session';


export default function Sessions(){
    const [sessoes, setSessoes] = useState(null);
    const { idFilme } = useParams();

    useEffect(() => {
        const requisicao = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`);

        requisicao.then(resposta => {
            setSessoes(resposta.data.days);
        });
    }, [idFilme]);

    if (sessoes === null) {
        return <span>Carregando</span>
    }


    return (
<>
            <TitleContainer>Selecione o horário</TitleContainer>
            <SessionsContainer>
                {sessoes.map(sessao => <Session weekday={sessao.weeday}  day={sessao.day} time={sessao.showtimes}/>)}
            </SessionsContainer>
        </>

    )
}

const TitleContainer = styled.div
`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 100%;
  margin-top: 25px;
  text-align: center;
  font-size: 24px;

`
const SessionsContainer = styled.div
`
display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10vh auto;
  margin-bottom: 14vh;
  width: 100%;
  background-color: #ffffff;
`
