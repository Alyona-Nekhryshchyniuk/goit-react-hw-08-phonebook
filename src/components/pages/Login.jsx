import { loginUser } from '../../redux/operations';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, UserInput } from '../Form.styled';
import { Button } from '../../components';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { selectErrorMessage } from '../../redux/selectors';
import { useSelector } from 'react-redux';

export const Login = () => {
  // const errorMessage = useSelector(selectErrorMessage);
  const [credentials, setCredentials] = useState({});
  const dispatch = useDispatch();

  const onInputChange = e => {
    setCredentials(state => {
      return { ...state, [e.target.name]: e.target.value };
    });
  };

  const onLoginSubmit = e => {
    e.preventDefault();
    const form = e.target;
    console.log(form.name.value);
    console.log(credentials);
    dispatch(loginUser(credentials));
  };
  return (
    <>
      {/* {errorMessage && toast(errorMessage)}
      <ToastContainer position="center" /> */}
      <h2>Log in to start</h2>
      <Form onSubmit={onLoginSubmit}>
        <label>
          email:
          <UserInput name="email" type="text" onChange={onInputChange} />
        </label>

        <label>
          password:
          <UserInput name="password" type="password" onChange={onInputChange} />
        </label>

        <Button
          type="submit"
          style={{
            color: 'rgb(255, 238, 125)',
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
