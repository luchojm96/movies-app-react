import { Grid } from '../../styles/layout/Grid.styled';
import MovieCard from './MovieCard';
import myMovies from '../../assets/movies.json';

export default function MoviesList() {
  return (
    <Grid>
      {myMovies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </Grid>
  );
}
