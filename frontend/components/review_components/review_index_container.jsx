import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {getReview} from '../../actions/review_actions';
import { clearErrors } from '../../actions/user_actions';
import Review from './review_index';

const mstp = (state, ownProps) => {
  return {
  review: state.entities.reviews[ownProps.match.props.reviewId]
  }
}

const mdtp = () => (dispatch) => ({
  clearErrors: () => dispatch(clearErrors()),
  getReview: (id) => dispatch(getReview(id))
})

export default connect(mstp, mdtp)(Review);