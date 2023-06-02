import { getTrending } from 'Api/Api';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const dataTrendMovies = await getTrending();

        console.log('dataTrendMovies :>> ', dataTrendMovies); // ---temp
        setTrendMovies(dataTrendMovies);
      } catch (error) {
        console.warn(error);
      }
    })();
  }, []);

  return (
    <>
      <h2>Trending today</h2>
      <ul>
        {trendMovies.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`library/${movie.id}`}>
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
    </>
  );
};

export default Home;
