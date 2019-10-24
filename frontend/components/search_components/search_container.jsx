import { connect } from 'react-redux';
import { searchBiz } from '../../actions/biz_actions';
import { clearErrors } from '../../actions/user_actions';
import Search from './search';

const mstp = (state) => ({
  currentUser: state.entities.users[state.session.currentUserId],
  err: state.errors.bizErrors,
  biz: state.entities.biz
});

const mdtp = () => (dispatch) => ({
  clearErrors: () => dispatch(clearErrors()),
  searchBiz: (query) => dispatch(searchBiz(query))
});

export default connect(mstp, mdtp)(Search);