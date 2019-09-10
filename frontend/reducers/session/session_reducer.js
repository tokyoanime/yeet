import {LOGOUT_USER} from '../../actions/session_actions';
import {RECEIVE_USER} from '../../actions/user_actions';

const defaultState = Object.freeze({
  currentUserId: null
});

const sessionReducer = (state = defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_USER:
      return Object.assign({}, state, {currentUserId: action.user.id});
    case LOGOUT_USER:
      return Object.assign({}, defaultState);
    default:
      return state;
  }
}

export default sessionReducer;