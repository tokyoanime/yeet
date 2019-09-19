import { combineReducers } from 'redux';
import userErrorsReducer from './user_errors_reducer';
import sessionErrorsReducer from './session_errors_reducer';
import bizErrorsReducer from './biz_errors_reducer';
import reviewErrorsReducer from './review_errors_reducer'

const errorsReducer = combineReducers({
  userErrors: userErrorsReducer,
  loginErrors: sessionErrorsReducer,
  bizErrors: bizErrorsReducer,
  reviewErrors: reviewErrorsReducer
});

export default errorsReducer;