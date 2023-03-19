import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { selectIsLoggedIn, selectToken } from '../redux/selectors';

export const RestrictedRoute = ({ navPath, element }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const token = useSelector(selectToken);

  if (isLoggedIn && token) {
    return element;
  }

  if (!isLoggedIn && !token) {
    return <Navigate to={navPath} />;
  }
};
