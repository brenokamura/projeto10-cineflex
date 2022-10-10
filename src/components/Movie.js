import styled from "styled-components";
import { Link } from "react-router-dom";

<<<<<<< HEAD
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
=======
function Movie({ posterURL, title, id}) {
    return (
        <>
            <Link to={`/sessoes/${id}`}>
                <MovieList>
                    <img src={posterURL} alt={title}></img>
                </MovieList>
            </Link>
        </>
    );
>>>>>>> 0bbf068bc890cd2a70685fe7108816d9c2317cb8
}

export default Movie;

const MovieList = styled.ul`
<<<<<<< HEAD
  display: flex;
  height: 193px;
  width: 129px;
  left: 38px;
  top: 177px;
`;
=======
    display: flex;
    height: 193px;
width: 129px;
left: 38px;
top: 177px;

`
>>>>>>> 0bbf068bc890cd2a70685fe7108816d9c2317cb8
