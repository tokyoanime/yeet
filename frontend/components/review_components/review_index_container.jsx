import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {fetchReviews, deleteReview} from '../../actions/review_actions';
import { clearErrors } from '../../actions/user_actions';
import Review from './review_index';

const mstp = (state) => ({
  currentUser: state.entities.users[state.session.currentUserId],
  reviews: Object.values(state.entities.reviews)
});

const mdtp = () => (dispatch) => ({
  clearErrors: () => dispatch(clearErrors()),
  deleteReview: (id) => dispatch(deleteReview(id)),
  fetchReviews: (bizId) => dispatch(fetchReviews(bizId))
});

export default withRouter(connect(mstp, mdtp)(Review));