import { connect } from 'react-redux';
import { clearErrors } from '../../actions/user_actions';
import Profile from './profile';

const mstp = ({ session, entities }) => ({
  user: entities.users[session.currentUserId],
});

const mdtp = () => (dispatch) => ({
  clearErrors: () => dispatch(clearErrors()),
});

export default connect(mstp, mdtp)(Profile);
