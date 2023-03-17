import { createAsyncThunk } from '@reduxjs/toolkit';
import * as API from '../axiosRequests';
import { token } from '../token';

// Fetch all
export const fetchContacts = createAsyncThunk(
  'contact/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await API.fetchAll();
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Add
export const addContact = createAsyncThunk(
  'contact/addContact',
  async (data, thunkAPI) => {
    try {
      const response = await API.postContact(data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Delete
export const deleteContact = createAsyncThunk(
  'contact/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await API.deleteContact(contactId);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Register
export const registerUser = createAsyncThunk(
  'register/registerUser',
  async (credentials, thunkAPI) => {
    try {
      // console.log(credentials);
      const response = await API.registerUser(credentials);
      // console.log(response.data);

      token.set(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Login
export const loginUser = createAsyncThunk(
  'login/loginUser',
  async (credentials, thunkAPI) => {
    try {
      // console.log(credentials);
      const response = await API.loginUser(credentials);
      console.log(response.data);
      token.set(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'login/logoutUser',
  async (_, thunkAPI) => {
    try {
      const response = await API.logoutUser();
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const getCurrentUser = createAsyncThunk(
//   'login/getCurrentUser',
//   async (_, thunkAPI) => {
//     try {
//       // const state = thunkAPI.getState();
//       // console.log(state);
//       // const token = state.login.token;
//       // console.log(token);
//       // token.set(token);
//       const response = await API.getCurrentUser();
//       return response.data;
//     } catch (error) {
//       thunkAPI.rejectWithValue(error.message);
//     }
//   },
//   {
//     condition: (userId, thunkAPI) => {
//       // const { users } = thunkAPI.getState();
//       // const { fetchStatus } = users[userId];
//       // if (fetchStatus === 'loading') {
//       //   return false;
//       // }
//     },
//   }
// );
