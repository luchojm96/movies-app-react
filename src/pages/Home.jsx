import MoviesList from '../components/movies/MoviesList';

export default function Home() {
  return (
    <>
      <h1
        style={{
          fontSize: '1.5rem',
          fontWeight: 700,
          color: '#fff',
          textAlign: 'center',
          marginBottom: '1.5rem',
        }}
      >
        Ultimas Peliculas
      </h1>

      <MoviesList />
    </>
  );
}
