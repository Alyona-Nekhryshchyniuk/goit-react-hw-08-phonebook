import { useSelector } from 'react-redux';

import { Navigate } from 'react-router-dom';

import { selectIsLoggedIn } from '../redux/selectors';

export const PrivateRoute = ({ navPath, element }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  console.log(isLoggedIn);
  return isLoggedIn ? <Navigate to={navPath} /> : element;
};
