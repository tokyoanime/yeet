import { RECEIVE_BIZ, RECEIVE_ALL_BIZ } from '../../actions/biz_actions';

const bizReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_BIZ:
      return Object.assign({}, action.biz)
    case RECEIVE_BIZ:
      return Object.assign({}, {[action.biz.id]: action.biz});
    default:
      return state;
  }
}

export default bizReducer;