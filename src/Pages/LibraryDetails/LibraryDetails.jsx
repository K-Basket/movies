import { Link, Outlet } from 'react-router-dom';

const LibraryDetails = () => {
  return (
    <>
      <h2>Library Details page</h2>

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
  );
};

export default LibraryDetails;
