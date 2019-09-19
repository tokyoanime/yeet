import * as ReviewUtil from '../util/biz_util';

export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const RECEIVE_REVIEW_ERRORS = 'RECEIVE_REVIEW_ERRORS';
export const DELETE_REVIEW = 'DELETE_REVIEW';

const receiveReview = (review) => {
  return {
    type: RECEIVE_REVIEW,
    review
  }
};

const receiveReviewErrors = (err) => ({
  type: RECEIVE_REVIEW_ERRORS,
  err
});

const deleteReview = (reviewId) => ({
  type: DELETE_REVIEW,
  reviewId
});

export const createReview = (review) => (dispatch) => ReviewUtil.createReview(review)
  .then(
    (review) => dispatch(receiveReview(review)),
    (err) => dispatch(receiveReviewErrors(err))
  );

export const getReview = (id) => (dispatch) => ReviewUtil.getReview(id)
    .then(
      (review) => dispatch(receiveReview(review)),
      (err) => dispatch(receiveReviewErrors(err))
    );

export const updateReview = (review) => (dispatch) => ReviewUtil.updateReview(review)
  .then(
    (review) => dispatch(receiveReview(review)),
    (err) => dispatch(receiveReviewErrors(err))
  );

export const deleteReview = (id) => (dispatch) => ReviewUtil.deleteReview(id)
  .then(
    (id) => dispatch(deleteReview(id)),
    (err) => dispatch(receiveReviewErrors(err))
  );