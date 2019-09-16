import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getBiz, createBiz } from '../../actions/biz_actions';
import { clearErrors } from '../../actions/user_actions';
import BizForm from './biz_form';

const defaultBiz = {
  biz_name: "",
  biz_address: "",
  biz_city: "",
  biz_state: "",
  biz_zipcode: "",
  biz_lat: "",
  biz_lng: "",
  biz_phone: "",
  biz_url: "",
  biz_price_rang: "",
  biz_parking: "false",
  biz_delivery: "false",
  biz_takeout: "false",
  biz_reservations: "false",
  biz_first_cat: "",
  biz_second_cat: "",
  biz_third_cat: "",
  biz_mo_hrs: "",
  biz_tu_hrs: "",
  biz_we_hrs: "",
  biz_th_hrs: "",
  biz_fr_hrs: "",
  biz_sa_hrs: "",
  biz_su_hrs: "",
  biz_owner_id: "",
}

const mstp = (state, ownProps) => ({
  err: state.errors.bizErrors,
  biz: defaultBiz,
  formType: "Create New Business"
});

const mdtp = () => (dispatch) => ({
  clearErrors: () => dispatch(clearErrors()),
  createBiz: (biz) => dispatch(createBiz(biz)),
  getBiz: (id) => dispatch(getBiz(id))
})

export default connect(mstp, mdtp)(BizForm);