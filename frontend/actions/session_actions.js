import * as SessionUtil from '../util/session_util';
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

export const login = (user) => (dispatch) => SessionUtil.postSession(user)
  .then(
    (user) => dispatch(receiveUser(user)),
    (err) => dispatch(receiveSessionErrors(err))
    );

export const logout = () => (dispatch) => SessionUtil.deleteSession()
  .then( 
    () => dispatch(logoutUser()),
    (err) => dispatch(receiveSessionErrors(err))
    );


