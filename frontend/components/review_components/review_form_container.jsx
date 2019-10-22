import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createReview, fetchReviews } from '../../actions/review_actions';
import { clearErrors } from '../../actions/user_actions';
import ReviewForm from './review_form';

const mstp = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.currentUserId],
  reviewErr: state.errors.reviewErrors
});

const mdtp = () => (dispatch) => ({
  clearErrors: () => dispatch(clearErrors()),
  createReview: (review) => dispatch(createReview(review)),
  fetchReviews: (bizId) => dispatch(fetchReviews(bizId))
});

export default withRouter(connect(mstp, mdtp)(ReviewForm));