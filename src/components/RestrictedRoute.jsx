import { useSelector } from 'react-redux';

import { selectIsLoggedIn } from '../redux/selectors';

export const RestrictedRoute = ({ elementA, elementB }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? elementA : elementB;
};
