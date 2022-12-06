import { combineReducers } from 'redux';
import recipesReducer from './recipesReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  userReducer,
  recipesReducer,
});

export default rootReducer;
