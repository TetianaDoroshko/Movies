import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchMovies, getTrendingMovies } from 'services/api';
import { Main } from 'components/App/App.styled';
import { MoviesList } from 'components/MoviesList/MoviesList.jsx';
import { SearchBox } from 'components/SearchBox/SearchBox.jsx';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState('');

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (query === '') {
      return;
    }
    getSearchMovies(query).then(setMovies).catch(setError);
  }, [query]);

  const onSearchSubmit = event => {
    event.preventDefault();
    const value = event.target.elements.searchbox.value;
    setSearchParams(value === '' ? {} : { query: value });
    event.target.reset();
  };

  return (
    <Main>
      <SearchBox onSubmit={onSearchSubmit} value={query} />
      {movies && <MoviesList items={movies} />}
    </Main>
  );
};
export default Movies;
