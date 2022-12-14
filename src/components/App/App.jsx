import { Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import { GlobalStyle } from 'components/GlobalStyle';
import { Container } from './App.styled';
import { AppBar } from 'components/AppBar/AppBar';
// import Home from 'pages/Home/Home';
// import Movies from 'pages/Movies/Movies';
// import MovieDetails from 'pages/MovieDetails/MovieDetails';
// import Cast from 'components/Cast/Cast';
// import Reviews from 'components/Reviews/Reviews';
import { lazy, Suspense } from 'react';
import { Oval } from 'react-loader-spinner';
import { UserPage } from 'components/UserPage/UserPage';

const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));

export const App = () => {
  return (
    <Provider store={store}>
      <Container>
        <GlobalStyle />
        <AppBar />
        <Suspense
          fallback={
            <Oval
              color="crimson"
              wrapperStyle={{ justifyContent: 'center' }}
              secondaryColor="#dbd9d9"
            />
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/UserPage" element={<UserPage />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </Container>
    </Provider>
  );
};
