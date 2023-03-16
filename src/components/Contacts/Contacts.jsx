import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';
import { selectError } from '../../redux/selectors';
import { useSelector } from 'react-redux';

export const Contacts = () => {
  const error = useSelector(selectError);
  return (
    <>
      {/* <h1>Phonebook</h1> */}
      <ContactForm />
      {/* <h1>Contacts</h1> */}
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
