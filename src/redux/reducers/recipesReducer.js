import { SET_SEARCH } from '../actions';

const INITIAL_STATE = {
  isToogle: false,
};

const recipesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_SEARCH:
    return {
      ...state,
      isToogle: action.payload,
    };
  default:
    return state;
  }
};

export default recipesReducer;
