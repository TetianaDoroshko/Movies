import { Routes, Route } from 'react-router-dom';
import { GlobalStyle } from 'components/GlobalStyle';
import { Container } from './App.styled';
import { AppBar } from 'components/AppBar/AppBar';
import Home from 'pages/Home/Home';
import Movies from 'pages/Movies/Movies';

export const App = () => {
  return (
    <Container>
      <GlobalStyle />
      <AppBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<div>Movie Details Page</div>}>
          <Route path="cast" element={<div>Cast</div>} />
          <Route path="reviews" element={<div>Reviews</div>} />
        </Route>
      </Routes>
    </Container>
  );
};
