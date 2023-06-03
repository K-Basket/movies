import { getMovieSearch, getTrending } from 'Api/Api';
import CardMovie from 'components/CardMovie/CardMovie';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const [movies, setMovies] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  // const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams(); // читать/перезаписывать строку запроса
  const query = searchParams.get('query') ?? ''; // записывает значение query или пустую строку

  useEffect(() => {
    (async () => {
      try {
        const dataTrendMovies = await getTrending();
        const movieSearch = await getMovieSearch(query);

        // console.log('Search :>> ', movieSearch); // ---temp
        console.log('dataTrendMovies :>> ', dataTrendMovies); // ---temp
        setMovies(movieSearch);
        setTrendMovies(dataTrendMovies);
      } catch (error) {
        console.warn(error);
      }
    })();
  }, [query]);

  const handleSubmit = evt => {
    evt.preventDefault();

    if (searchInput === '') {
      // return Notiflix.Notify.warning('Add movie search');
      console.warn('Add movie search');
    }

    setSearchParams({}); // очищаем строку запроса от search
    setSearchParams({ query: searchInput });
    setSearchInput('');
  };

  const updateQueryString = evt => {
    // setSearchInput(evt.target.value.trim()); // записываем в State данные input
    setSearchInput(evt.target.value); // записываем в State данные input
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <button type="submit">Submit</button>

          <input
            type="text"
            name="search"
            value={searchInput} // получаем из State
            onChange={updateQueryString}
            autoComplete="off"
            autoFocus
            placeholder="Search movie"
          />
        </form>
      </div>

      <div>
        {movies.length === 0 ? (
          <CardMovie title={'Trending today'} moviesData={trendMovies} />
        ) : (
          <CardMovie title={'Found movies'} moviesData={movies} />
        )}
      </div>
    </>
  );
};

export default Home;
