import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './contactSlice';
import { filterReducer } from './filterSlice';
import { registerReducer } from './registerSlice';
import { loginReducer } from './loginSlice';

export const store = configureStore({
  reducer: {
    contact: contactReducer,
    filter: filterReducer,
    register: registerReducer,
    login: loginReducer,
  },
});
