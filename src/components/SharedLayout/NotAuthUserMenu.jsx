import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Header } from '../../components';

export const NotAuthUserMenu = () => {
  return (
    <>
      <Header>
        <nav>
          <ul>
            <NavLink to="register" className="NavLink">
              Register
            </NavLink>
            <NavLink to="/" className="NavLink">
              Login
            </NavLink>
          </ul>
        </nav>
      </Header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
