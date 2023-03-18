import { useSelector } from 'react-redux';
import { redirect } from 'react-router-dom';

import { selectIsLoggedIn } from '../redux/selectors';

export const RestrictedRoute = ({ elementA, elementB }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  // if (isLoggedIn) {
  //   redirect('/Contacts');
  //   return elementA;
  // } else {
  //   return elementB;
  // }
  return isLoggedIn ? elementA : elementB;
};
