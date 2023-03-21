import { loginUser } from '../../redux/operations';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Form, UserInput } from '../Form.styled';
import { Button } from '../../components';
import { isBtnDisabled } from '../../extraFns';
import { createErrorMessage, container } from '../../../src/toastNotification';
import { selectErrorMessage } from '../../redux/selectors';
import { useSelector } from 'react-redux';

export const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
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

  const onLoginSubmit = e => {
    e.preventDefault();
    dispatch(loginUser(credentials));

    // 1s timeOut for finising reducer work(creation errorMessage in Redux state)
    setTimeout(() => {
      setErrorInctrement(prev => (prev += 1));
    }, 1000);
  };
  return (
    <>
      {container}
      <h2>Log in to start using phonebook</h2>
      <Form onSubmit={onLoginSubmit}>
        <label>
          Email
          <UserInput name="email" type="text" onChange={onInputChange} />
        </label>

        <label>
          Password
          <UserInput name="password" type="password" onChange={onInputChange} />
        </label>

        <Button
          disabled={isBtnDisabled(credentials)}
          type="submit"
          style={{
            paddingLeft: 18,
            paddingRight: 18,
          }}
        >
          Log in
        </Button>
      </Form>
    </>
  );
};
