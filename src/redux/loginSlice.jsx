import { createSlice } from '@reduxjs/toolkit';
import { loginUser } from '../redux/operations';

const loginSlice = createSlice({
  name: 'login',
  initialState: { email: '', password: '', token: '', isLoggedIn: false },
  extraReducers: builder => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        console.log(action.payload);
        state.token = action.payload.token;
        state.email = action.payload.user.email;
        state.password = action.payload.user.password;
        state.isLoggedIn = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        console.log(action.payload);
        state.isLoggedIn = false;
      });
    //   .addCase();
  },
});
export const loginReducer = loginSlice.reducer;
