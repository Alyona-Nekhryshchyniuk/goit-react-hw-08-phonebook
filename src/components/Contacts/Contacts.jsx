import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';
import { selectError } from '../../redux/selectors';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from '../../redux/operations';
import { token } from '../../token';
import { selectToken, selectIsRefreshing } from '../../redux/selectors';

export const Contacts = () => {
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  const tokenAuth = useSelector(selectToken);

  useEffect(() => {
    token.set(tokenAuth);
    dispatch(fetchContacts());
  }, [dispatch, tokenAuth]);
  const isRefreshing = useSelector(selectIsRefreshing);

  console.log('isRefreshing', isRefreshing);
  return (
    <>
      <ContactForm />
      <Filter />
      {error && (
        <div style={{ color: 'red' }}>
          <p>Oooops ...</p>
          <p>{error}</p>
        </div>
      )}
      <ContactList />
    </>
  );
};
