import { Link, Outlet, useParams } from 'react-router-dom';

const LibraryDetails = () => {
  const { id } = useParams();
  console.log('useParam-id', id);

  return (
    <>
      <h2>Library Details page</h2>
      <p>{`This's movie id: ${id}`}</p>

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
