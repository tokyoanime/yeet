import * as BizUtil from '../util/biz_util';

export const RECEIVE_BIZ = "RECEIVE_BIZ";
export const RECEIVE_BIZ_ERRORS = "RECEIVE_BIZ_ERRORS";

const receiveBiz = (biz) => ({
  type: RECEIVE_BIZ,
  biz
});

const receiveBizErrors = (err) => ({
  type: RECEIVE_BIZ_ERRORS,
  err
});

export const createBiz = (biz) => (dispatch) => BizUtil.createBiz(biz)
  .then(
    (biz) => dispatch(receiveBiz(biz)),
    (err) => dispatch(receiveBizErrors(err))
  );

export const getBiz = (id) => (dispatch) => BizUtil.getBiz(id)
  .then(
    (biz) => dispatch(receiveBiz(biz)),
    (err) => dispatch(receiveBizErrors(err))
  );

export const updateBiz = (biz) => (dispatch) => BizUtil.updateBiz(biz)
  .then(
    (biz) => dispatch(receiveBiz(biz)),
    (err) => dispatch(receiveBizErrors(err))
  );