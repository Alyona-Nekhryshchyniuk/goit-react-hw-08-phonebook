import { useDispatch } from 'react-redux';
import { registerUser } from '../../redux/operations';
import { useState, useEffect } from 'react';
import { Form, UserInput } from '../Form.styled';
import { Button } from '../../components';
import { createErrorMessage, container } from '../../../src/toastNotification';
import { selectErrorMessage } from '../../redux/selectors';
import { useSelector } from 'react-redux';
import { isBtnDisabled } from '../../extraFns';

export const Register = () => {
  const [credentials, setCredentials] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [errorInctrement, setErrorInctrement] = useState(0);
  const dispatch = useDispatch();
  let errorMessage = useSelector(selectErrorMessage);

  useEffect(() => {
    if (errorInctrement > 0) createErrorMessage(errorMessage);
  }, [errorInctrement, errorMessage]);

  const onInputChange = e => {
    setCredentials(state => {
      return { ...state, [e.target.name]: e.target.value };
    });
  };

  const onRegisterSubmit = e => {
    e.preventDefault();
    dispatch(registerUser(credentials));

    // 1s timeOut for finising reducer work(creation errorMessage in Redux state)
    setTimeout(() => {
      setErrorInctrement(prev => (prev += 1));
    }, 1000);
  };

  return (
    <>
      {container}
      <h2>Registration</h2>
      <Form onSubmit={onRegisterSubmit}>
        <label>
          Name
          <UserInput type="text" name="name" onChange={onInputChange} />
        </label>

        <label>
          Email
          <UserInput type="text" name="email" onChange={onInputChange} />
        </label>

        <label>
          Password
          <UserInput
            type="password"
            name="password"
            placeholder="At least 7 characters"
            onChange={onInputChange}
          />
        </label>

        <Button disabled={isBtnDisabled(credentials)} type="submit">
          Register
        </Button>
      </Form>
    </>
  );
};
