import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
export const SharedLayout = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <NavLink to="contacts" className="navItem">
              Contacts
            </NavLink>
            <NavLink to="register" className="navItem">
              Register
            </NavLink>
            <NavLink to="login" className="navItem">
              Login
            </NavLink>
          </ul>
        </nav>
        <div>
          <img />
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
