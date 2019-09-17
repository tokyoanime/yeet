import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import TopNavContainer from '../nav_components/top_nav_container';

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
        <TopNavContainer />
        <div className="nav-bar-menu">

        </div>

        <div className="biz-carousel">

        </div>
        <div className="biz-info-container">
          <div className="biz-sub-left">
            <div className="biz-quick-info">
              <div className="biz-name">Business Name: {this.props.biz.biz_name}</div>
              <div className="biz-rating">
                <div className="biz-star-rating">Review Star Rating Here</div>
                <div className="biz-num-review"># of reviews here</div>
              </div>
              <div className="biz-general-info">
                <div className="biz-price">Price Range: {this.props.biz.biz_price_range}</div>
                <div className="biz-first-cat">Category (first): {this.props.biz.biz_first_cat}</div>
                <div className="biz-second-cat">Category (second): {this.props.biz.biz_second_cat}</div>
                <div className="biz-third-cat">Category (third): {this.props.biz.biz_third_cat}</div>
                <div className="biz-edit-button">Edit Button Here</div>
              </div>
            </div>
            <div className="biz-loc-hrs-container">
              <div className="biz-loc-container">
                <div className="biz-map">

                </div>
                <div className="biz-address">
                  <div>Address: {this.props.biz.biz_address}</div>
                  <div>City: {this.props.biz.biz_city}</div>
                  <div>State: {this.props.biz.biz_state}</div>
                  <div>Zip Code: {this.props.biz.biz_zipcode}</div>
                </div>
              </div>
              <div className="biz-hrs-container">
                <div>{this.props.biz.biz_mo_hrs}</div>
                <div>{this.props.biz.biz_tu_hrs}</div>
                <div>{this.props.biz.biz_we_hrs}</div>
                <div>{this.props.biz.biz_th_hrs}</div>
                <div>{this.props.biz.biz_fr_hrs}</div>
                <div>{this.props.biz.biz_sa_hrs}</div>
                <div>{this.props.biz.biz_su_hrs}</div>
              </div>
            </div>
          </div>
          <div className="biz-sub-right">

          </div>
        </div>
    
        <div>Phone: {this.props.biz.biz_phone}</div>
        <div>URL: {this.props.biz.biz_url}</div>
        
        <div>Parking: {this.props.biz.biz_parking}</div>
        <div>Delivery: {this.props.biz.biz_delivery}</div>
        <div>Takeout: {this.props.biz.biz_takeout}</div>
        <div>Reservations: {this.props.biz.biz_reservations}</div>
        
        
      </div>
    )
  }
}

export default BizShow;