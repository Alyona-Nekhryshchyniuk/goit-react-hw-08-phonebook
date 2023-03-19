// import { createSlice } from '@reduxjs/toolkit';
// import { registerUser } from '../redux/operations';

// const registerSlice = createSlice({
//   name: 'register',
//   initialState: { email: '', password: '', token: '', isLoggedIn: false },
//   extraReducers: builder => {
//     builder
//       .addCase(registerUser.fulfilled, (state, action) => {
//         console.log(action.payload);
//         state.token = action.payload.token;
//         state.email = action.payload.user.email;
//         state.password = action.payload.user.password;
//         state.isLoggedIn = true;
//       })
//       .addCase(registerUser.rejected, (state, action) => {
//         console.log(action.payload);
//         state.isLoggedIn = false;
//       });
//     //   .addCase();
//   },
// });
// export const registerReducer = registerSlice.reducer;
