import { getMovieSearch, getTrending } from 'Api/Api';
import MovieCards from 'components/MovieCards/MovieCards';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const [, setMovies] = useState([]);
  const [searchParams] = useSearchParams(); // читать/перезаписывать строку запроса
  const query = searchParams.get('query') ?? ''; // записывает значение query или пустую строку

  useEffect(() => {
    (async () => {
      try {
        const dataTrendMovies = await getTrending();
        const movieSearch = await getMovieSearch(query);

        // console.log('dataTrendMovies :>> ', dataTrendMovies); // ---temp
        setMovies(movieSearch);
        setTrendMovies(dataTrendMovies);
      } catch (error) {
        console.warn(error);
      }
    })();
  }, [query]);

  return (
    <>
      <div>
        <MovieCards pathLink={'movies/'} moviesData={trendMovies} />
      </div>
    </>
  );
};

export default Home;
