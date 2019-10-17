import { connect } from 'react-redux';
import { createReview, deleteReview } from '../../actions/review_actions';
import { clearErrors } from '../../actions/user_actions';
import ReviewForm from './review_form';

const mstp = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.currentUserId],
  reviewErr: state.errors.reviewErrors
});

const mdtp = () => (dispatch) => ({
  clearErrors: () => dispatch(clearErrors()),
  createReview: (review) => dispatch(createReview(review)),
  deleteReview: (id) => dispatch(deleteReview(id))
});

export default connect(mstp, mdtp)(ReviewForm);