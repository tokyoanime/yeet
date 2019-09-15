import { combineReducers } from 'redux';
import userReducer from './users_reducer';
import bizReducer from './biz_reducer';

const entitiesReducer = combineReducers({
  users: userReducer,
  biz: bizReducer
});

export default entitiesReducer;