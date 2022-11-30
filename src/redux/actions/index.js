export const login = 'login';

export const actionLogin = (email) => ({
  type: login,
  emailLogin: email,
});
