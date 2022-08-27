import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCastInfo } from 'services/api';
import { Li, Descr } from './Cast.styled';
import { WarningBox } from 'pages/Movies/Movies.styled';
import placeholder from 'images/person.png';

const Cast = () => {
  const { movieId } = useParams();

  const [castInfo, setCastInfo] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getCastInfo(movieId)
      .then(info => {
        setCastInfo(info.cast);
        setError(null);
      })
      .catch(error => {
        setCastInfo(null);
        setError(error);
      });
  }, [movieId]);

  return (
    <>
      {castInfo && (
        <ul>
          {castInfo.map(person => (
            <Li key={person.id}>
              <img
                src={
                  person.profile_path
                    ? `https://image.tmdb.org/t/p/w500${person.profile_path}`
                    : placeholder
                }
                alt={person.name}
                width="100"
              />
              <Descr>{person.name}</Descr>
              <Descr>Character: {person.character}</Descr>
            </Li>
          ))}
        </ul>
      )}
      {error && <WarningBox>{error}</WarningBox>}
    </>
  );
};
export default Cast;
