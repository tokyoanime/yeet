import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getBiz } from '../../actions/biz_actions';
import { clearErrors } from '../../actions/user_actions';
import BizShow from './biz_show';

const mstp = (state, ownProps) => {
  // debugger
  return {
  err: state.errors.bizErrors,
  biz: state.entities.biz[ownProps.match.params.bizId]
  }
};

const mdtp = () => (dispatch) => ({
  clearErrors: () => dispatch(clearErrors()),
  getBiz: (id) => dispatch(getBiz(id))
});

export default connect(mstp, mdtp)(BizShow);