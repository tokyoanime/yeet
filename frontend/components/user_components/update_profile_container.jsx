import { connect } from 'react-redux';
import { updateUser, getUser, clearErrors } from '../../actions/user_actions';
import UpdateProfile from './update_profile';

const mstp = ({ session, entities, errors }) => ({
  user: entities.users[session.currentUserId],
  errors: errors.userErrors,
});

const mdtp = () => (dispatch) => ({
  getUser: (id) => dispatch(getUser(id)),
  processForm: (user) => dispatch(updateUser(user)),
  clearErrors: () => dispatch(clearErrors()),
});

export default connect(mstp, mdtp)(UpdateProfile);
