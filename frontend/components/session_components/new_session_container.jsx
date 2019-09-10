import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';

const defaultUser = {username: "", password: ""}

const mstp = (state, ownProps) => ({
  formType: "Sign In",
  errors: state.errors.loginErrors,
  user: defaultUser
});

const mdtp = () => (dispatch) => ({
  login: (user) => dispatch(login(user))
})

export default connect(mstp, mdtp)(SessionForm);