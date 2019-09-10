import { combineReducers } from 'redux';
import userErrorsReducer from './userErrorsReducer';
import sessionErrorsReducer from './session_errors_reducer';

const errorsReducer = combineReducers({
  userErrors: userErrorsReducer,
  loginErrors: sessionErrorsReducer
});

export default errorsReducer;