import { Link } from 'react-router-dom';

const CardMovie = ({ title, moviesData }) => {
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {moviesData.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`home/${movie.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
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

export default CardMovie;
