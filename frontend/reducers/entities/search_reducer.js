import { RECEIVE_RES, RECEIVE_RES_ERRORS } from '../../actions/search_actions';

const searchReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_RES:
      return Object.assign({}, action.res);
    default:
      return state;
  }
};

export default searchReducer;
