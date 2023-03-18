import axios from 'axios';

export const connectionsAPIAxios = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const postContact = data => {
  return connectionsAPIAxios.post('/contacts', data);
};

export const fetchAll = () => {
  return connectionsAPIAxios.get('/contacts');
};

export const deleteContact = contactId => {
  return connectionsAPIAxios.delete(`/contacts/${contactId}`);
};

export const registerUser = credentials => {
  return connectionsAPIAxios.post('/users/signup', credentials);
};

export const loginUser = credentials => {
  return connectionsAPIAxios.post('/users/login', credentials);
};

export const logoutUser = () => {
  return connectionsAPIAxios.post('/users/logout');
};

export const getCurrentUser = () => {
  return connectionsAPIAxios.get('/users/current');
};
