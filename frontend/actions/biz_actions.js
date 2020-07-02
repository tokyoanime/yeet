import * as BizUtil from '../util/biz_util';

export const RECEIVE_ALL_BIZ = "RECEIVE_ALL_BIZ";
export const RECEIVE_BIZ = "RECEIVE_BIZ";
export const RECEIVE_BIZ_ERRORS = "RECEIVE_BIZ_ERRORS";

const receiveAllBiz = (biz) => ({
  type: RECEIVE_ALL_BIZ,
  biz
})

const receiveBiz = (biz) => {
  return {
  type: RECEIVE_BIZ,
  biz
  }
};

const receiveBizErrors = (err) => ({
  type: RECEIVE_BIZ_ERRORS,
  err
});

export const fetchBiz = () => (dispatch) => BizUtil.fetchBiz()
  .then(
    (biz) => dispatch(receiveAllBiz(biz)),
    (err) => dispatch(receiveBizErrors(err))
  );

export const createBiz = (biz) => (dispatch) => BizUtil.createBiz(biz)
  .then(
    (biz) => dispatch(receiveBiz(biz)),
    (err) => dispatch(receiveBizErrors(err))
  );

export const getBiz = (id) => (dispatch) => {
  return (BizUtil.getBiz(id)
  .then(
    (biz) => dispatch(receiveBiz(biz)),
    (err) => dispatch(receiveBizErrors(err))
  ))
}

export const updateBiz = (biz) => (dispatch) => BizUtil.updateBiz(biz)
  .then(
    (biz) => dispatch(receiveBiz(biz)),
    (err) => dispatch(receiveBizErrors(err))
  );

export const searchBiz = (query) => (dispatch) => BizUtil.searchBiz(query)
    .then(
      (biz) => dispatch(receiveAllBiz(biz)),
      (err) => dispatch(receiveBizErrors(err))
    )

export const liveSearch = (query) => (dispatch) => BizUtil.liveSearch(query)
  .then(
    (biz) => dispatch(receiveAllBiz(biz)),
    (err) => dispatch(receiveBizErrors(err))
