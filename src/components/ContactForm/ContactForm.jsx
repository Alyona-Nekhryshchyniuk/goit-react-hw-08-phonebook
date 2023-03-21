import {
  default as PropTypes,
  Button,
  BsFillTelephonePlusFill,
  useState,
  useDispatch,
  useSelector,
} from '../../components';
import { Form, UserInput } from '../../components';
import { addContact } from '../../redux/operations';
import { selectContacts } from '../../redux/selectors';
import { createErrorMessage, container } from '../../../src/toastNotification';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const inputChange = ({ target }) => {
    if (target.name === 'name') return setName(target.value);
    setNumber(target.value);
  };

  return (
    <section>
      <h2>Phonebook</h2>
      {container}
      <Form
        color="#ffee7d"
        onSubmit={e => {
          e.preventDefault();
          contacts.find(obj => obj.name === name)
            ? createErrorMessage(`${name} is already in contacts`, 'warning')
            : dispatch(addContact({ name, number }));
          setName('');
          setNumber('');
        }}
      >
        <label>
          Name{' '}
          <UserInput
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={inputChange}
          />
        </label>
        <label>
          Number{' '}
          <UserInput
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={inputChange}
          />
        </label>
        <Button type="submit">
          <BsFillTelephonePlusFill /> Add contacts
        </Button>
      </Form>
    </section>
  );
};
ContactForm.propTypes = {
  addContact: PropTypes.func,
};

export { ContactForm as default };
