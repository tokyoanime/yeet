import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TopNav from './top_nav';
import { logout } from '../../actions/session_actions';

const mstp = ({session, entities}) => ({
  currentUser: entities.users[session.currentUserId],
  entities
});

const mdtp= () => (dispatch) => ({
  logout: () => dispatch(logout())
});

export default connect(mstp, mdtp)(TopNav);