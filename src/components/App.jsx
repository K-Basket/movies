import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from 'Pages/Home/Home';
import Library from 'Pages/Library/Library';
import LibraryDetails from 'Pages/LibraryDetails/LibraryDetails';
import AboutMovie from './AboutMovie/AboutMovie';
import Cast from './Cast/Cast';
import Movies from 'Pages/Movies/Movies';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="movies" element={<Movies />} />
          <Route path="movies/:id" element={<LibraryDetails />}>
            <Route path="about" element={<AboutMovie />} />
            <Route path="cast" element={<Cast />} />
          </Route>

          <Route path="library" element={<Library />} />
          {/* <Route path="library/:id" element={<LibraryDetails />}>
            <Route path="about" element={<AboutMovie />} />
            <Route path="cast" element={<Cast />} />
          </Route> */}
        </Route>
      </Routes>
    </div>
  );
};
