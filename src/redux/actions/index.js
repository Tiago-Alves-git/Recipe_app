export const login = 'login';
export const SET_SEARCH = 'SET_SEARCH';

export const actionLogin = (email) => ({
  type: login,
  emailLogin: email,
});

export const actionSearch = (bool) => ({
  type: SET_SEARCH,
  payload: bool,
});
