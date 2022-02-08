import { Card, Info } from '../../styles/movies/Card.styled';
import defaultMovie from '../../assets/img/default-movie.png';

export default function MovieCard({ movie }) {
  return (
    <Card>
      <img src={movie.image ? movie.image : defaultMovie} alt={movie.title} />
      <MovieInfo movieInfo={movie} />
    </Card>
  );
}

function MovieInfo({ movieInfo }) {
  const { title, year, synopsis, stars, categories } = movieInfo;
  return (
    <Info className="info">
      <p className="title">
        {title} ({year})
      </p>
      <p className="description">{synopsis}</p>
      <p className="stars">{`${stars} ⭐`}</p>
      <p className="categories">{categories.forEach((element) => `${element} `)}</p>
    </Info>
  );
}
