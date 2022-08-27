import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getSearchMovies } from 'services/api';
import { Main } from 'components/App/App.styled';
import { MoviesList } from 'components/MoviesList/MoviesList.jsx';
import { SearchBox } from 'components/SearchBox/SearchBox.jsx';
import { WarningBox } from './Movies.styled';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const location = useLocation();

  useEffect(() => {
    if (query === '') {
      return;
    }
    getSearchMovies(query)
      .then(movies => {
        if (movies.length === 0) {
          setError(
            `We don't find results for '${query}'. Please, enter another search query and try again.`
          );
          setMovies(movies);
        } else {
          setError(null);
          setMovies(movies);
        }
      })
      .catch(error => {
        setError(error);
        setMovies(null);
      });
  }, [query]);

  const onSearchSubmit = event => {
    event.preventDefault();
    const value = event.target.elements.searchbox.value;
    setSearchParams(value === '' ? {} : { query: value });
    event.target.reset();
  };

  return (
    <Main>
      <SearchBox onSubmit={onSearchSubmit} />
      {movies && <MoviesList items={movies} location={location} />}
      {error && <WarningBox>{error}</WarningBox>}
    </Main>
  );
};
export default Movies;
