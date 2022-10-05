import styled from "styled-components";

function Session({ diaSemana, data , sessoes}) {
    return (
        <>

            <SessionList>
                <SessionDay>{diaSemana} - {data}</SessionDay>
                <SessionTime>{sessoes}</SessionTime>
            </SessionList>

        </>
    );
}

export default Session;

const SessionList = styled.div`
    display: flex;
    height: 193px;
    width: 129px;
    left: 38px;
    top: 177px;

`

const SessionDay = styled.div
`

`

const SessionTime = styled.div
`

`