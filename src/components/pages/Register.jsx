import { useDispatch } from 'react-redux';
import { registerUser } from '../../redux/operations';
import { useState } from 'react';
import { Form, UserInput } from '../Form.styled';
import { Button } from '../../components';
export const Register = () => {
  const [credentials, setCredentials] = useState({});
  const dispatch = useDispatch();

  const onInputChange = e => {
    setCredentials(state => {
      return { ...state, [e.target.name]: e.target.value };
    });
  };

  const onRegisterSubmit = e => {
    e.preventDefault();
    const form = e.target;
    console.log(form.name.value);
    console.log(credentials);
    dispatch(registerUser(credentials));
  };

  return (
    <>
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

        <Button type="submit" style={{ color: '#ffee7d' }}>
          Register
        </Button>
      </Form>
    </>
  );
};