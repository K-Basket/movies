import { getMovieSearch } from 'Api/Api';
import FormSearch from 'components/FormSearch/FormSearch';
import MovieCards from 'components/MovieCards/MovieCards';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  console.log('movies.length :>> ', movies.length);

  // const [searchInput, setSearchInput] = useState('');
  // const location = useLocation();
  const [searchParams] = useSearchParams(); // читать/перезаписывать строку запроса
  const query = searchParams.get('query') ?? ''; // записывает значение query или пустую строку

  useEffect(() => {
    (async () => {
      try {
        const movieSearch = await getMovieSearch(query);

        // console.log('movieSearch :>> ', movieSearch); // ---temp
        setMovies(movieSearch);
      } catch (error) {
        console.warn(error);
      }
    })();
  }, [query]);

  return (
    <>
      <div>
        <FormSearch />
        {movies.length !== 0 && (
          <MovieCards pathLink={''} moviesData={movies} />
        )}
      </div>
    </>
  );
};

export default Movies;
