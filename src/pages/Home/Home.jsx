import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'services/api';
import { Main } from 'components/App/App.styled';
import { MoviesList } from 'components/MoviesList/MoviesList';

const Home = () => {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    getTrendingMovies().then(setMovies).catch(setError);
  }, []);

  return (
    <Main>
      <h1>Trending today</h1>
      {movies && <MoviesList items={movies} />}
    </Main>
  );
};

export default Home;
