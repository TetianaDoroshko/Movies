import { ItemsLink } from 'components/MoviesList/MoviesList.styled';
import { ContentBox } from './AddNavigation.styled';

export const AddNavigation = () => {
  return (
    <ContentBox>
      <p>Additional information</p>
      <ul>
        <li>
          <ItemsLink to="cast">Cast</ItemsLink>
        </li>
        <li>
          <ItemsLink to="reviews">Reviews</ItemsLink>
        </li>
      </ul>
    </ContentBox>
  );
};
