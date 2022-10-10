import styled from "styled-components";

export default function Footer({ poster, title, name = "", weekday }) {
  return (
    <Container>
      <PosterContainer data-identifier="movie-img-preview">
        <img src={poster} alt={title} />
      </PosterContainer>
      <MovieContainer data-identifier="movie-and-session-infos-preview">
        <MovieInformation>{title}</MovieInformation>
        <MovieInformation>{name.length === 0 ? "" : `${weekday} - ${name}`}</MovieInformation>
      </MovieContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  border-top: 1px solid #9eadba;
  background-color: #dfe6ed;
  color: #293845;
  min-height: 14vh;
  width: 100%;
  font-size: 26px;
  position: fixed;
  bottom: 0;
  left: 0;
`;

const PosterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 65px;
  height: 80px;
  margin: 0 5px;
  padding: 3px;
  background-color: #ffffff;
  box-shadow: 0 0 1px 1px #33333360;
  border-radius: 2px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const MovieInformation = styled.p`
  display: flex;
  width: 100%;
`;