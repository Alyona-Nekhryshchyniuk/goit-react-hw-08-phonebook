export const selectContacts = state => state.contact.items;

export const selectFilter = state => state.filter;

export const selectError = state => state.contact.error;

export const selectIsLoggedIn = state => state.login.isLoggedIn;

export const selectEmail = state => state.login.email;

export const selectToken = state => state.login.token;

export const selectErrorMessage = state => state.login.errorMessage;
export const selectIsRefreshing = state => state.login.isRefreshing;

export const selectFilteredList = state => {
  const filterValue = selectFilter(state);
  const contactList = selectContacts(state);
  const loweredFilter = filterValue.toLowerCase();
  return contactList.filter(({ name }) =>
    name.toLowerCase().includes(loweredFilter)
  );
};
