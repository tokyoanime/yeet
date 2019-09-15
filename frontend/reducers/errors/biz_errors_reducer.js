import {
  RECEIVE_BIZ_ERRORS,
  RECEIVE_BIZ
} from '../../actions/biz_actions';
import { CLEAR_ERRORS } from '../../actions/user_actions';

const bizErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_BIZ_ERRORS:
      return (action.err.responseJSON)
    case RECEIVE_BIZ:
      return [];
    case CLEAR_ERRORS:
      return[];
    default:
      return state;
  }
}

export default bizErrorsReducer;