import { combineReducers } from 'redux';
import UserReducer from './userReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  user: UserReducer,
  form: formReducer
});

export default rootReducer;
