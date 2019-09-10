import {RECEIVE_SESSION_ERRORS} from '../../actions/session_actions';
import { RECEIVE_USER } from '../../actions/user_actions';

const sessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return (action.err.responseJSON)
    case RECEIVE_USER:
      return [];
    default:
      return state;
  }
}

export default sessionErrorsReducer;