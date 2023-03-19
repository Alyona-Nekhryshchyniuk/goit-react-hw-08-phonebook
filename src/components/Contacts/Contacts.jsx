import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';
import { selectError } from '../../redux/selectors';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from '../../redux/operations';

export const Contacts = () => {
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

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
