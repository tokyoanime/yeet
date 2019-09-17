import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class BizShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getBiz(this.props.match.params.bizId);
  }

  componentDidUpdate() {

  }

  render() {
    if (!this.props.biz) {
      return null
    }

    return(
      <div>
        <div>Business Name: {this.props.biz.biz_name}</div>
        <div>Address: {this.props.biz.biz_address}</div>
        <div>City: {this.props.biz.biz_city}</div>
        <div>State: {this.props.biz.biz_state}</div>
        <div>Zip Code: {this.props.biz.biz_zipcode}</div>
        <div>Phone: {this.props.biz.biz_phone}</div>
        <div>URL: {this.props.biz.biz_url}</div>
        <div>Price Range: {this.props.biz.biz_price_range}</div>
        <div>Parking: {this.props.biz.biz_parking}</div>
        <div>Delivery: {this.props.biz.biz_delivery}</div>
        <div>Takeout: {this.props.biz.biz_takeout}</div>
        <div>Reservations: {this.props.biz.biz_reservations}</div>
        <div>Category (first): {this.props.biz.biz_first_cat}</div>
        <div>Category (second): {this.props.biz.biz_second_cat}</div>
        <div>Category (third): {this.props.biz.biz_third_cat}</div>
        <div>{this.props.biz.biz_mo_hrs}</div>
        <div>{this.props.biz.biz_tu_hrs}</div>
        <div>{this.props.biz.biz_we_hrs}</div>
        <div>{this.props.biz.biz_th_hrs}</div>
        <div>{this.props.biz.biz_fr_hrs}</div>
        <div>{this.props.biz.biz_sa_hrs}</div>
        <div>{this.props.biz.biz_su_hrs}</div>
      </div>
    )
  }
}

export default BizShow;