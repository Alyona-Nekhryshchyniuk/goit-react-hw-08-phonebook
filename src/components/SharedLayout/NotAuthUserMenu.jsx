import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Header } from '../../components';
import css from './Header.module.css';

export const NotAuthUserMenu = () => {
  return (
    <>
      <Header>
        <nav className={css.navMenu}>
          <ul className={css.navList}>
            <NavLink to="register" className={css.NavLink}>
              Register
            </NavLink>
            <NavLink to="/" className={css.NavLink}>
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
