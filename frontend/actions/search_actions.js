import { search } from '../util/search_util';

export const RECEIVE_RES = 'RECEIVE_RES';
export const RECEIVE_RES_ERRORS = 'RECEIVE_RES_ERRORS';

const receiveRes = res => ({
  type: RECEIVE_RES,
  res
});

const receiveResErrors = err => ({
  type: RECEIVE_RES_ERRORS,
  err
});

export const liveSearch = query => dispatch =>
  search(query).then(
    res => dispatch(receiveRes(res)),
    err => dispatch(receiveResErrors(err))
  );
