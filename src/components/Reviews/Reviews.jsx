import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getReviews } from 'services/api';
import { Li, Descr } from './Reviews.styled';
import { WarningBox } from 'pages/Movies/Movies.styled';

const Reviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getReviews(movieId)
      .then(info => {
        console.log(info);
        if (info.length === 0) {
          console.log('info.length === 0');
          setError(`There aren't any reviews for this movie yet.`);
          setReviews(null);
        } else {
          setError(null);
          setReviews(info);
        }
      })
      .catch(error => {
        setReviews(null);
        setError(error);
      });
  }, [movieId]);

  return (
    <>
      {reviews && (
        <ul>
          {reviews.map(review => (
            <Li key={review.id}>
              <h2>Author: {review.author}</h2>
              <Descr>{review.content}</Descr>
            </Li>
          ))}
        </ul>
      )}
      {error && <WarningBox>{error}</WarningBox>}
    </>
  );
};
export default Reviews;
