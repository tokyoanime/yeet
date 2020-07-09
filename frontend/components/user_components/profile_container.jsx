import { connect } from 'react-redux';
import { clearErrors, getUser } from '../../actions/user_actions';
import { deleteReview } from '../../actions/review_actions';
import Profile from './profile';

const mstp = ({ session, entities }) => ({
  user: entities.users[session.currentUserId] || '',
});

const mdtp = ({ session }) => (dispatch) => ({
  clearErrors: () => dispatch(clearErrors()),
  getUser: (id) => dispatch(getUser(id)),
  deleteReview: (id) => dispatch(deleteReview(id)),
});

export default connect(mstp, mdtp)(Profile);
