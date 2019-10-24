import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getReview, updateReview } from '../../actions/review_actions';
import { clearErrors } from '../../actions/user_actions';
import ReviewEdit from './review_edit';

const mstp = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.currentUserId] || null,
  review: state.entities.reviews[ownProps.match.params.reviewId] || null,
  reviewErr: state.errors.reviewErrors
});

const mdtp = () => (dispatch) => ({
  clearErrors: () => dispatch(clearErrors()),
  getReview: (id) => dispatch(getReview(id)),
  updateReview: (review) => dispatch(updateReview(review))
});

export default withRouter(connect(mstp, mdtp)(ReviewEdit));