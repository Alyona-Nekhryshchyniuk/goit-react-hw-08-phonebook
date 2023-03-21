import { createSelector } from '@reduxjs/toolkit';
export const selectContacts = state => state.contact.items;

export const selectFilter = state => state.filter;

export const selectError = state => state.contact.error;

export const selectIsLoggedIn = state => state.login.isLoggedIn;

export const selectEmail = state => state.login.user.email;

export const selectToken = state => state.login.token;

export const selectErrorMessage = state => state.login.errorMessage;

export const selectFilteredList = createSelector(
  [selectFilter, selectContacts],
  (filterValue, contactList) => {
    const loweredFilter = filterValue.toLowerCase();
    return contactList.filter(({ name }) =>
      name.toLowerCase().includes(loweredFilter)
    );
  }
);
