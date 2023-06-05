import { getMovieCredits } from 'Api/Api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const [movieCast, setMovieCast] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const dataMovieCredits = await getMovieCredits(id);

        // console.log('dataMovieCredits :>> ', dataMovieCredits.cast);

        setMovieCast(dataMovieCredits.cast);
      } catch (error) {
        console.warn(error);
      }
    })();
  }, [id]);

  return (
    <>
      <ul>
        {'Actors:'}
        {movieCast.map(({ cast_id, name, character, profile_path }) => {
          return (
            <li key={cast_id}>
              {profile_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                  alt=""
                  width="150"
                />
              )}
              <p>{name}</p>
              <p>character: {character}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Cast;
