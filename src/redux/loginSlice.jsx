import { createSlice } from '@reduxjs/toolkit';
import {
  registerUser,
  loginUser,
  logoutUser,
  getCurrentUser,
} from '../redux/operations';

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    user: { email: '', password: '' },
    token: '',
    isLoggedIn: false,
    errorMessage: '',
  },
  extraReducers: builder => {
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.isLoggedIn = true;
      })
      .addCase(registerUser.rejected, state => {
        state.isLoggedIn = false;
        state.errorMessage = 'Registration was unsuccessful. Try again';
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.errorMessage = '';
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.isLoggedIn = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoggedIn = false;
        state.errorMessage = 'Incorrect email or/and password';
      })
      .addCase(logoutUser.fulfilled, state => {
        state.errorMessage = '';
        state.user = { email: '', password: '' };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(logoutUser.rejected, state => {
        state.errorMessage = 'Be carefull. You didn`t log out yet';
        state.token = null;
        state.isLoggedIn = true;
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.isRefreshing = true;
        state.user = action.payload;
        state.isLoggedIn = true;
      });
  },
});
export const loginReducer = loginSlice.reducer;
