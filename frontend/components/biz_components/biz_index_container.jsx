import {connect} from 'react-redux';
import BizIndex from './biz_index';
import { searchBiz } from '../../actions/biz_actions';
import { clearErrors } from '../../actions/user_actions';

const mstp = (state) => ({
  biz: Object.keys(state.entities.biz).map(id => state.entities.biz[id])
});

const mdtp = () => (dispatch) => ({
  clearErrors: () => dispatch(clearErrors()),
  searchBiz: (query) => dispatch(searchBiz(query))
});

export default connect(mstp, mdtp)(BizIndex);