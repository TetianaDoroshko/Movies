import PropTypes from 'prop-types';
import { genresTransform } from 'services/genres';
import {
  Card,
  DescriptionBox,
  Title,
  SubTitle,
  GenresTitle,
} from './MovieCard.styled';

export const MovieCard = ({ movie }) => {
  const { poster_path, genres, overview, title, vote_average, release_date } =
    movie;

  return (
    <Card>
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
        width="300"
      />
      <DescriptionBox>
        <Title>
          {title} ({Number.parseInt(release_date)})
        </Title>
        <p>User Score: {Math.round(vote_average * 10)}%</p>
        <SubTitle>Overview</SubTitle>
        <p>{overview}</p>
        <GenresTitle>Genres</GenresTitle>
        <p>{genresTransform(genres)}</p>
      </DescriptionBox>
    </Card>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.object),
    overview: PropTypes.string,
    title: PropTypes.string,
    vote_average: PropTypes.number,
    release_date: PropTypes.string,
  }),
};
