import {
  postSession,
  deleteSession
} from '../util/session_api_util';
import {receiveUser} from './user_actions';

export const LOGOUT_USER = "LOGOUT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

const logoutUser = () => ({
  type: LOGOUT_USER
});

const receiveSessionErrors = (err) => ({
  type: RECEIVE_SESSION_ERRORS,
  err
});

export const loginUser = (user) => (dispatch) => postSession(user)
  .then( (user) => dispatch(receiveUser(user)))
  .catch( (err) => dispatch(receiveSessionErrors(err)));

export const logoutUser = () => (dispatch) => deleteSession()
  .then( () => dispatch(logoutUser()))
  .catch( (err) => dispatch(receiveSessionErrors(err)));

