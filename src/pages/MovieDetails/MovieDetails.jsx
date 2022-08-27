import { Main } from 'components/App/App.styled';
import { useState, useEffect, Suspense } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieById } from 'services/api';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { WarningBox } from 'pages/Movies/Movies.styled';
import { AddNavigation } from 'components/AddNavigation/AddNavigation';
import { LinkBack } from './MovieDetails.styled';
import { Oval } from 'react-loader-spinner';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  const location = useLocation();

  useEffect(() => {
    getMovieById(movieId)
      .then(movie => {
        setMovie(movie);
        setError(null);
      })
      .catch(error => {
        setMovie(null);
        setError(error);
      });
  }, [movieId]);

  return (
    <Main>
      <LinkBack to={location?.state?.from ?? '/'}>&#10229; Go back</LinkBack>
      {movie && <MovieCard movie={movie} />}
      {error && <WarningBox>{error}</WarningBox>}
      <AddNavigation />
      <Suspense
        fallback={
          <Oval
            color="crimson"
            wrapperStyle={{ justifyContent: 'center' }}
            secondaryColor="#dbd9d9"
          />
        }
      >
        <Outlet />
      </Suspense>
    </Main>
  );
};
export default MovieDetails;
