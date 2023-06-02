const { Outlet, NavLink } = require('react-router-dom');

const layout = () => {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/library">My library</NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <h2>footer</h2>
      </footer>
    </>
  );
};

export default layout;
