import { configureStore } from '@reduxjs/toolkit';
import { loginReducer } from './loginSlice';
import { contactReducer } from './contactSlice';
import { filterReducer } from './filterSlice';
import { registerReducer } from './registerSlice';

import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

const persistedReducer = persistReducer(persistConfig, loginReducer);

export let store = configureStore({
  reducer: {
    contact: contactReducer,
    filter: filterReducer,
    register: registerReducer,
    login: persistedReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export let persistor = persistStore(store);

// old version

// const persistConfig = {
//   key: 'token',
//   storage,
//   whitelist: ['login'],
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// // export const store = configureStore({
// //   reducer: {
// //     contact: contactReducer,
// //     filter: filterReducer,
// //     register: registerReducer,
// //     login: loginReducer,
// //   },
// // });

// export let store = configureStore({
//   reducer: persistedReducer,

//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });
// export let persistor = persistStore(store);
