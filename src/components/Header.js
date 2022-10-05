import styled from "styled-components"

export default function Hearder(){

return(
    <HearderTop>
        <span>CINEFLEX</span>
    </HearderTop>
)
}


const HearderTop = styled.div
`
    height: 67px;
    width: 100%;
    background-color: #C3CFD9;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    span{
        font-family: Roboto;
        font-size: 34px;
        line-height: 40px;
        color: #E8833A;

    }
`