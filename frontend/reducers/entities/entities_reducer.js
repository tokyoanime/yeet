import { combineReducers } from 'redux';
import userReducer from './users_reducer';
import bizReducer from './biz_reducer';
import reviewReducer from './reviews_reducer';

const entitiesReducer = combineReducers({
  users: userReducer,
  biz: bizReducer,
  reviews: reviewReducer
});

export default entitiesReducer;