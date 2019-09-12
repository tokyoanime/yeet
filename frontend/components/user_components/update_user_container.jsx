import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateUser, clearErrors } from '../../actions/user_actions';
import UserForm from './user_form';

const defaultUser = {username: "", email: "", password: ""}

const mstp = (state, ownProps) => ({
  formType: "Update User",
  err: state.errors.userErrors,
  user: defaultUser
});

const mdtp = () => (dispatch) => ({
  processForm: (user) => dispatch(updateUser(user)),
  clearErrors: () => dispatch(clearErrors())
})

export default connect(mstp, mdtp)(UserForm);