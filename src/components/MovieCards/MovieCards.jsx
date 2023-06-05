import { Link } from 'react-router-dom';

const MovieCards = ({ pathLink, moviesData }) => {
  return (
    <div>
      <ul>
        {moviesData.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`${pathLink}${movie.id}`}>
                {/* {movie.poster_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    width="250"
                  />
                ) : (
                  <p>There is no image here</p>
                )} */}

                <img
                  src={`https://image.tmdb.org/t/p/w500${
                    movie.poster_path ?? '/dykOcAqI01Fci5cKQW3bEUrPWwU.jpg'
                  }`}
                  alt={movie.title}
                  width="250"
                />
                <h3>{movie.title ?? movie.name}</h3>
                <p>{`Releaze date: ${movie.release_date}`}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MovieCards;
