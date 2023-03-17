import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
export const NotAuthUserMenu = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <NavLink to="register" className="navItem">
              Register
            </NavLink>
            <NavLink to="/" className="navItem">
              Login
            </NavLink>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
