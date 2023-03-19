import { createSlice } from '@reduxjs/toolkit';
import { loginUser, logoutUser, getCurrentUser } from '../redux/operations';

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    email: '',
    password: '',
    token: '',
    isLoggedIn: false,
    isRefreshing: false,
    // errorMessage: '',
  },
  extraReducers: builder => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        // state.errorMessage = '';
        state.token = action.payload.token;
        state.email = action.payload.user.email;
        state.password = action.payload.user.password;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoggedIn = false;
        state.isRefreshing = false;
        // state.errorMessage = 'Email or/and password are incorrect. Try again';
      })
      .addCase(logoutUser.fulfilled, state => {
        state.errorMessage = '';
        state.email = '';
        state.password = '';
        state.token = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
      })
      .addCase(logoutUser.rejected, state => {
        // state.errorMessage = 'Be carefull. You didn`t log out yet';
        state.email = '';
        state.password = '';
        state.token = null;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.isRefreshing = true;
        state.email = action.payload.email;
        state.isLoggedIn = true;

        console.log(action.payload);
        console.log(action);

        state.isRefreshing = false;
      });
  },
});
export const loginReducer = loginSlice.reducer;
