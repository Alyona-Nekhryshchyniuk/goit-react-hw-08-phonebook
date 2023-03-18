import { useSelector } from 'react-redux';
import { redirect } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import { selectIsLoggedIn } from '../redux/selectors';

export const RestrictedRoute = ({ navPath, element }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  // if (isLoggedIn) {
  //   redirect('/Contacts');
  //   return elementA;
  // } else {
  //   return elementB;
  // }
  return isLoggedIn ? element : <Navigate to={navPath} />;
};
