import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { selectIsLoggedIn, selectToken } from '../redux/selectors';

export const RestrictedRoute = ({ navPath, element }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const token = useSelector(selectToken);
  console.log(token);
  // If(!isLoggedIn && token) return;

  // If(isLoggedIn){
  //   return element
  // }else{
  //   return  <Navigate to={navPath} />
  // }
  if (!isLoggedIn && token) {
    return <>...</>;
  } else {
    return !isLoggedIn && !token ? <Navigate to={navPath} /> : element;
  }
  // return isLoggedIn ? element : <Navigate to={navPath} />;
};
