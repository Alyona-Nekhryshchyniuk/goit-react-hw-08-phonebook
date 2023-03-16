import axios from 'axios';

// axios.defaults.baseURL = 'https://63da6ba5b28a3148f686d43d.mockapi.io';
const contact = axios.create({
  baseURL: 'https://63da6ba5b28a3148f686d43d.mockapi.io',
});

const user = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/users',
});

export const postContact = data => {
  return contact.post('/contacts', data);
};

export const fetchAll = () => {
  return contact.get('/contacts');
};

export const deleteContact = contactId => {
  return contact.delete(`/contacts/${contactId}`);
};

export const registerUser = credentials => {
  return user.post('/signup', credentials);
};

export const loginUser = credentials => {
  return user.post('/login', credentials);
};
