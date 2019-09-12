import {
  RECEIVE_USER_ERRORS,
  RECEIVE_USER,
  CLEAR_ERRORS
} from '../../actions/user_actions';

const userErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  
  switch (action.type) {
    case RECEIVE_USER_ERRORS:
      return (action.err.responseJSON)
    case RECEIVE_USER:
      return [];
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
};

export default userErrorsReducer;