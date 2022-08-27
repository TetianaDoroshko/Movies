import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'services/api';
import { Main } from 'components/App/App.styled';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { WarningBox } from 'pages/Movies/Movies.styled';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState('');
  const location = useLocation();
  console.log('location on home', location);

  useEffect(() => {
    getTrendingMovies().then(setMovies).catch(setError);
  }, []);

  return (
    <Main>
      <h1>Trending today</h1>
      {movies && <MoviesList items={movies} location={location} />}
      {error && <WarningBox>{error}</WarningBox>}
    </Main>
  );
};

export default Home;
