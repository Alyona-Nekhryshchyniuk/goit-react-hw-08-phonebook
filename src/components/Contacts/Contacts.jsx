import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';
import { selectError } from '../../redux/selectors';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from '../../redux/operations';
import { FlexContainer, RightSection } from './Container.styled';
import { createErrorMessage, container } from '../../../src/toastNotification';

export const Contacts = () => {
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  error && createErrorMessage(`Oooops ... ${error}`);

  return (
    <FlexContainer>
      {container}
      <ContactForm />
      <RightSection>
        <Filter />
        <ContactList />
      </RightSection>
    </FlexContainer>
  );
};
