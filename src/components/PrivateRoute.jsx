import { useSelector } from 'react-redux';

import { Navigate } from 'react-router-dom';

import { selectIsLoggedIn } from '../redux/selectors';

export const PrivateRoute = ({ navPath }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn && <Navigate to={navPath} />;
};
