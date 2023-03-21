import { createAsyncThunk } from '@reduxjs/toolkit';
import * as API from '../axiosRequests';
import { tokenHeaders } from '../tokenHeaders';

// Fetch all
export const fetchContacts = createAsyncThunk(
  'contact/fetchAll',
  async (_, thunkAPI) => {
    const { token } = thunkAPI.getState().login;
    tokenHeaders.set(token);
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
  'login/registerUser',
  async (credentials, thunkAPI) => {
    console.log(credentials);
    try {
      const response = await API.registerUser(credentials);
      tokenHeaders.set(response.data.token);
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
      const response = await API.loginUser(credentials);
      tokenHeaders.set(response.data.token);
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
      tokenHeaders.unset();
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  'login/getCurrentUser',
  async (_, thunkAPI) => {
    const { token } = thunkAPI.getState().login;
    tokenHeaders.set(token);
    try {
      const response = await API.getCurrentUser();
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  },
  {
    condition: (_, { getState }) => {
      const { token } = getState().login;

      if (!token) {
        return false;
      }
    },
  }
);
