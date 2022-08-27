import PropTypes from 'prop-types';
import { ItemsLink } from './MoviesList.styled';

export const MoviesList = ({ items, location }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <ItemsLink to={`/movies/${item.id}`} state={{ from: location }}>
            {item.title ?? item.name}
          </ItemsLink>
        </li>
      ))}
    </ul>
  );
};

MoviesList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  location: PropTypes.object,
};
