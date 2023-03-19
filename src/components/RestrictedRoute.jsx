import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { selectIsLoggedIn, selectToken } from '../redux/selectors';

export const RestrictedRoute = ({ navPath, element }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const token = useSelector(selectToken);
  console.log(token);

  if (isLoggedIn && token) {
    console.log('1');
    return element;
  }

  if (!isLoggedIn && !token) {
    console.log('2');
    return <Navigate to={navPath} />;
  }

  // if (!isLoggedIn && token) {
  //   console.log('3');
  //   return <> ... </>;
  // }

  // return isLoggedIn ? element : <Navigate to={navPath} />;
};
