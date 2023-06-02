const { Outlet } = require('react-router-dom');

const layout = () => {
  return (
    <>
      <header>
        <nav>
          <p>Navigation</p>
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
