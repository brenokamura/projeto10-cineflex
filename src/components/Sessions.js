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
                {sessoes.map(sessao => <Session weekday={sessao.weeday}  day={sessao.day} time={sessao.showtime.name}/>)}
            </SessionsContainer>
        </>

    )
}

const TitleContainer = styled.div
`

`
const SessionsContainer = styled.div
`

`
