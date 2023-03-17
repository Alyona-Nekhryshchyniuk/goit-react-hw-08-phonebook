import { combineReducers } from 'redux';
import { contactReducer } from './contactSlice';
import { filterReducer } from './filterSlice';
import { registerReducer } from './registerSlice';
import { loginReducer } from './loginSlice';

export const rootReducer = combineReducers({
  contact: contactReducer,
  filter: filterReducer,
  register: registerReducer,
  login: loginReducer,
});
