import { ItemsLink } from './MoviesList.styled';

export const MoviesList = ({ items }) => {
  return (
    <ul>
      {items.map(movie => (
        <li key={movie.id}>
          <ItemsLink to={`/movies/${movie.id}`}>
            {movie.title ?? movie.name}
          </ItemsLink>
        </li>
      ))}
    </ul>
  );
};
