import * as ReviewUtil from '../util/review_util';

export const RECEIVE_ALL_REVIEWS = 'RECEIVE_ALL_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const RECEIVE_REVIEW_ERRORS = 'RECEIVE_REVIEW_ERRORS';
export const DELETE_REVIEW = 'DELETE_REVIEW';

const receiveAllReviews = (reviews) => ({
  type: RECEIVE_ALL_REVIEWS,
  reviews
});

const receiveReview = (review) =>({
    type: RECEIVE_REVIEW,
    review
});

const receiveReviewErrors = (err) => ({
  type: RECEIVE_REVIEW_ERRORS,
  err
});

const destroyReview = (reviewId) => ({
  type: DELETE_REVIEW,
  reviewId
});

export const fetchReviews = (bizId) => (dispatch) => ReviewUtil.fetchReviews(bizId)
  .then(
    (reviews) => dispatch(receiveAllReviews(reviews)),
    (err) => dispatch(receiveReviewErrors(err))
  )

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
    (id) => dispatch(destroyReview(id)),
    (err) => dispatch(receiveReviewErrors(err))
  );