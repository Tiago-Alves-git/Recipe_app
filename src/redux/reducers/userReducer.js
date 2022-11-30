import { login } from '../actions';

const INITIAL_STATE = {
  email: '',
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case login:
    return {
      ...state,
      email: action.emailLogin,
    };
  default:
    return state;
  }
};

export default userReducer;
