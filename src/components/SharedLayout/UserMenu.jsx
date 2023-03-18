import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../redux/operations';
import { Navigate } from 'react-router-dom';
import { selectEmail } from '../../redux/selectors';
import { Button, ImExit, Header, NavUserDetails } from '../../components';
import css from './Header.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const email = useSelector(selectEmail);
  console.log(email);
  const logOutClick = () => {
    dispatch(logoutUser());
    return <Navigate to="/" />;
  };

  return (
    <>
      <Header>
        <NavLink to="contacts" className={css.NavLink}>
          Contacts
        </NavLink>
        <NavUserDetails>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              fill="#142d4c"
              className="avatarIcon"
              viewBox="0 0 16 16"
              style={{ marginRight: 8, paddingTop: 7 }}
            >
              <path d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5z" />
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            </svg>
          </div>
          <span>{email}</span>
          <Button
            type="button"
            onClick={logOutClick}
            style={{ marginLeft: 15 }}
          >
            <ImExit color="#ffee7d" />
            Log out
          </Button>
        </NavUserDetails>
      </Header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
