import { Route, Routes } from 'react-router-dom';
import { Contacts } from './Contacts/Contacts';
import { NotAuthUserMenu } from './SharedLayout/NotAuthUserMenu';
import { UserMenu } from './SharedLayout/UserMenu';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { selectErrorMessage } from 'redux/selectors';
import { useSelector } from 'react-redux';

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <RestrictedRoute
              elementA={<UserMenu />}
              elementB={<NotAuthUserMenu />}
            />
          }
        >
          <Route index element={<Login />} />{' '}
          <Route path="/register" element={<Register />} />
          <Route
            path="/contacts"
            element={<PrivateRoute navPath="/" element={<Contacts />} />}
          />
        </Route>
      </Routes>
    </>
  );
};

export default App;
