import { createSlice } from '@reduxjs/toolkit';
import { loginUser, logoutUser, getCurrentUser } from '../redux/operations';

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    email: '',
    password: '',
    token: '',
    isLoggedIn: false,
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
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoggedIn = false;
        // state.errorMessage = 'Email or/and password are incorrect. Try again';
      })
      .addCase(logoutUser.fulfilled, state => {
        state.errorMessage = '';
        state.email = '';
        state.password = '';
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(logoutUser.rejected, state => {
        // state.errorMessage = 'Be carefull. You didn`t log out yet';
        state.email = '';
        state.password = '';
        state.token = null;
        state.isLoggedIn = true;
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        console.log(action.payload);
        console.log(action);
        state.isLoggedIn = true;
      });
  },
});
export const loginReducer = loginSlice.reducer;
