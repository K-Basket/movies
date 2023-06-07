import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from 'Pages/Home/Home';
import Library from 'Pages/Library/Library';
import AboutMovie from './AboutMovie/AboutMovie';
import Cast from './Cast/Cast';
import Movies from 'Pages/Movies/Movies';
import MovieDetails from 'Pages/LibraryDetails/MovieDetails';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="movies" element={<Movies />} />
          <Route path="movies/:id" element={<MovieDetails />}>
            <Route path="about" element={<AboutMovie />} />
            <Route path="cast" element={<Cast />} />
          </Route>

          <Route path="library" element={<Library />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};
