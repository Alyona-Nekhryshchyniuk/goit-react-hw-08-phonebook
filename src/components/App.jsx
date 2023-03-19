import { Route, Routes } from 'react-router-dom';
import { Contacts } from './Contacts/Contacts';
import { NotAuthUserMenu } from './SharedLayout/NotAuthUserMenu';
import { UserMenu } from './SharedLayout/UserMenu';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { useSelector } from 'react-redux';
import { useEffect, useDispatch } from '../components';
import { getCurrentUser } from '../redux/operations';
import { createErrorMessage, container } from '../../src/toastNotification';
import {
  selectIsLoggedIn,
  selectToken,
  selectErrorMessage,
} from '../redux/selectors';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const token = useSelector(selectToken);
  const errorMessage = useSelector(selectErrorMessage);
  const error = errorMessage !== '' && createErrorMessage(errorMessage);
  const isRefreshing = token && !isLoggedIn;

  return (
    <>
      {error}
      {container}
      {isRefreshing ? (
        <p> Wait for a second ...</p>
      ) : (
        <Routes>
          <Route
            path="/"
            element={isLoggedIn ? <UserMenu /> : <NotAuthUserMenu />}
          >
            <Route
              index
              element={<PrivateRoute navPath="/contacts" element={<Login />} />}
            />
            <Route
              path="/register"
              element={
                <PrivateRoute navPath="/contacts" element={<Register />} />
              }
            />
            <Route
              path="/contacts"
              element={<RestrictedRoute element={<Contacts />} navPath="/" />}
            />
          </Route>
        </Routes>
      )}{' '}
    </>
  );
};

export default App;
