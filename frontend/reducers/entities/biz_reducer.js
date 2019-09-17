import { RECEIVE_BIZ } from '../../actions/biz_actions';

const bizReducer = (state = {}, action) => {
  Object.freeze(state);

  // debugger;
  switch (action.type) {
    case RECEIVE_BIZ:
      // debugger
      return Object.assign({}, {[action.biz.id]: action.biz});
    default:
      return state;
  }
}

export default bizReducer;