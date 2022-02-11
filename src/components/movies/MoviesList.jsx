import { useContext } from "react";
import { MoviesContext } from "../../contexts/MoviesContext";
import { Grid } from "../../styles/layout/Grid.styled";
import MovieCard from "./MovieCard";

export default function MoviesList() {
  const { movies } = useContext(MoviesContext);

  return (
    <Grid>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </Grid>
  );
}
