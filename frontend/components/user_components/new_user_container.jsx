import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createUser } from '../../actions/user_actions';
import UserForm from './user_form';

const defaultUser = {username: "", email: "", password: ""}

const mstp = (state, ownProps) => ({
  formType: "Sign Up",
  errors: state.errors.userErrors,
  user: defaultUser
});

const mdtp = () => (dispatch) => ({
  processForm: (user) => dispatch(createUser(user))
})

export default connect(mstp, mdtp)(UserForm);