import * as UserUtil from '../util/user_util';

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS"; 

export const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
});

const receiveUserErrors = (err) => ({
  type: RECEIVE_USER_ERRORS,
  err
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
})

export const createUser = (user) => (dispatch) => UserUtil.createUser(user)
  .then(
    (user) => dispatch(receiveUser(user)),
    (err) => dispatch(receiveUserErrors(err))
  );

export const getUser = (id) => (dispatch) => UserUtil.getUser(id)
  .then(
    (user) => dispatch(receiveUser(user)),
    (err) => dispatch(receiveUserErrors(err))
  )

export const updateUser = (user) => (dispatch) => UserUtil.updateUser(user)
  .then(
      (user) => dispatch(receiveUser(user)),
      (err) => dispatch(receiveUserErrors(err))
    )