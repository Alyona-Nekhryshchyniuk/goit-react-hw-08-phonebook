import { loginUser } from '../../redux/operations';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

export const Login = () => {
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
      <h2>Log in</h2>
      <form onSubmit={onLoginSubmit}>
        <label>
          Email<input name="email" type="text" onChange={onInputChange}></input>
        </label>
        <label>
          Password
          <input
            name="password"
            type="password"
            onChange={onInputChange}
          ></input>
        </label>
        <button type="submit">Log in</button>
      </form>
    </>
  );
};
