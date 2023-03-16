import { useDispatch } from 'react-redux';
import { registerUser } from '../../redux/operations';
import { useState } from 'react';
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
      <form onSubmit={onRegisterSubmit}>
        <label>
          Name<input type="text" name="name" onChange={onInputChange}></input>
        </label>
        <label>
          Email<input type="text" name="email" onChange={onInputChange}></input>
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            onChange={onInputChange}
          ></input>
        </label>
        <button type="submit">Register</button>
      </form>
    </>
  );
};
