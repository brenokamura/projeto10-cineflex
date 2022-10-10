import styled from "styled-components";
import { Link } from "react-router-dom";

function Movie({ posterURL, title, id }) {
  return (
    <>
      <Link to={`/sessoes/${id}`}>
        <MovieList data-identifier="movie-outdoor">
          <img src={posterURL} alt={title}></img>
        </MovieList>
      </Link>
    </>
  );
}

export default Movie;

const MovieList = styled.ul`
  display: flex;
  height: 193px;
  width: 129px;
  left: 38px;
  top: 177px;
  background-color: #FFFFFF;
  box-shadow: 0 0 5px 5px #33333360;
  border-radius: 5px;
`;