import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateUser } from '../../actions/user_actions';
import UserForm from './user_form';

const defaultUser = {username: "", email: "", password: ""}

const mstp = (state, ownProps) => ({
  formType: "Update User",
  err: state.errors.userErrors,
  user: state.entities.users[ownProps.match.params.userId] || defaultUser
});

const mdtp = () => (dispatch) => ({
  processForm: (user) => dispatch(updateUser(user))
})

export default connect(mstp, mdtp)(UserForm);