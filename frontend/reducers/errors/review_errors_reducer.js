import {RECEIVE_REVIEW_ERRORS} from '../../actions/review_actions';
import { CLEAR_ERRORS } from '../../actions/user_actions';

const reviewErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_REVIEW_ERRORS:
      const err = action.err.responseJSON || [];
      return (err);
    case CLEAR_ERRORS:
      return[];
    default:
      return state;
  }
};

export default reviewErrorsReducer;