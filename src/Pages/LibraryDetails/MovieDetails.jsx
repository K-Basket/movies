import { getMovieCredits, getMovieDetails } from 'Api/Api';
import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState();
  const [crew, setCrew] = useState();
  const [cast, setCast] = useState();
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const dataMovieDetails = await getMovieDetails(id);
        const dataMovieCredits = await getMovieCredits(id);

        // console.log('dataMovieDetails :>> ', dataMovieDetails);
        // actorsShortData();

        setMovieDetails(dataMovieDetails);
        setCrew(dataMovieCredits.crew);
        setCast(dataMovieCredits.cast);
      } catch (error) {
        console.warn(error);
      }
    })();
  }, [id]);

  // принимает должность участника съемочной группы и массив объектов -> возвращает объект с данными про учасниика
  const getMovieCrew = (job, data) => data.find(el => el.job === job);

  // функция сокращает (укорачивает) массив
  const actorsShortData = () => {
    if (cast.length < 5) return cast;

    const data = cast;
    data.length = 5;
    return data;
  };

  // console.log('actorsShortData :>> ', actorsShortData());

  return (
    movieDetails && (
      <>
        <h2>{`Title Film: ${movieDetails.title}`}</h2>
        <img
          src={`https://image.tmdb.org/t/p/w500${
            movieDetails.poster_path ?? '/dykOcAqI01Fci5cKQW3bEUrPWwU.jpg'
          }`}
          alt={movieDetails.title}
          width="250"
        />
        <p>Tegline: {movieDetails.tagline}</p>
        <p>{`Popularity: ${movieDetails.popularity}`}</p>
        <p>{`Vote average: ${movieDetails.vote_average}`}</p>
        <p>{`Vote count: ${movieDetails.vote_count}`}</p>
        <p>{`Release date: ${movieDetails.release_date}`}</p>
        <p>{`Budget: ${movieDetails.budget}`}</p>
        <p>{`Runtime: ${movieDetails.runtime} min.`}</p>

        <ul>
          {'Countries:'}
          {movieDetails.production_countries.map(({ name }) => {
            return <li key={name}>{name}</li>;
          })}
        </ul>

        <p>
          Director:{' '}
          {crew.length !== 0 ? getMovieCrew('Director', crew).name : 'none'}
        </p>

        <ul>
          {'Genres:'}
          {movieDetails.genres.map(({ id, name }) => {
            return <li key={id}>{name}</li>;
          })}
        </ul>

        <ul>
          {'Actors:'}
          {actorsShortData().map(({ cast_id, name }) => {
            return <li key={cast_id}>{name}</li>;
          })}
          {cast.length >= 5 && <li>and others</li>}
        </ul>

        <ul>
          {'Pproduction companies:'}
          {movieDetails.production_companies.map(({ id, logo_path }) => {
            return (
              <li key={id}>
                {logo_path && (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${logo_path}`}
                    alt=""
                    width="150"
                  />
                )}
              </li>
            );
          })}
        </ul>

        <p>Overview: {movieDetails.overview}</p>

        <ul>
          <li>
            <Link to="about">About the film</Link>
          </li>
          <li>
            <Link to="cast">Cast</Link>
          </li>
        </ul>

        <Outlet />
      </>
    )
  );
};

export default MovieDetails;
