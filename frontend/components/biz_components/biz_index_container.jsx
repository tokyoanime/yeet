import {connect} from 'react-redux';
import BizIndex from './biz_index';
import { withRouter } from 'react-router-dom';
import {fetchBiz} from '../../actions/biz_actions'

const mstp = (state) => ({
  biz: Object.keys(state.entities.biz).map(id => state.entities.biz[id])
});

const mdtp = () => (dispatch) => ({
  fetchBiz: () => dispatch(fetchBiz())
});

export default connect(mstp, mdtp)(BizIndex);