import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getBiz } from '../../actions/biz_actions';
import { clearErrors } from '../../actions/user_actions';
import BizShow from './biz_show';
import { createReview, deleteReview } from '../../actions/review_actions';
import { createFav, fetchFav } from '../../actions/fav_actions';

const mstp = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.currentUserId],
    err: state.errors.bizErrors,
    reviewErr: state.errors.reviewErrors,
    biz: state.entities.biz[ownProps.match.params.bizId],
  };
};

const mdtp = () => (dispatch) => ({
  clearErrors: () => dispatch(clearErrors()),
  getBiz: (id) => dispatch(getBiz(id)),
  createReview: (review) => dispatch(createReview(review)),
  deleteReview: (id) => dispatch(deleteReview(id)),
  createFav: (fav) => dispatch(createFav(fav)),
  fetchFav: (businessId) => dispatch(fetchFav(businessId)),
});

export default connect(mstp, mdtp)(BizShow);
