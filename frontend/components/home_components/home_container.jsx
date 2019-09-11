import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Home from './home';
import { logout } from '../../actions/session_actions';

const mstp = ({session, entities}) => ({
  currentUser: entities.users[session.currentUserId]
});

const mdtp = () => (dispatch) => ({
  logout: () => dispatch(logout())
});

export default connect(mstp, mdtp)(Home);