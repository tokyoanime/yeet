import {
  createUser,
  getUser,
  updateUser
} from '../util/user_util';

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";

export const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
});

const receiveUserErrors = (err) => ({
  type: RECEIVE_USER_ERRORS,
  err
});

export const createUser = (user) => (dispatch) => createUser(user)
  .then( (user) => dispatch(receiveUser(user)))
  .catch( (err) => dispatch(receiveError(err)));

export const getUser = (id) => (dispatch) => getUser(id)
  .then( (user) => dispatch(receiveUser(user)))
  .catch( (err) => dispatch(receiveError(err)));

export const updateUser = (user) => (dispatch) => updateUser(user)
  .then( (user) => dispatch(receiveUser(user)))
  .catch( (err) => dispatch(receiveUserErrors(err)));