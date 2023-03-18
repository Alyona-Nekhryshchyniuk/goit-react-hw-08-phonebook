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

import { selectIsLoggedIn } from '../redux/selectors';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={isLoggedIn ? <UserMenu /> : <NotAuthUserMenu />}
        >
          <Route
            index
            element={<PrivateRoute navPath="/Contacts" element={<Login />} />}
          />
          <Route path="/register" element={<Register />} />
          <Route
            path="/contacts"
            element={<RestrictedRoute element={<Contacts />} navPath="/" />}
          />
        </Route>
      </Routes>
    </>
  );
};

export default App;
