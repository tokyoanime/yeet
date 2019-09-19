import React from 'react';
import { Link, withRouter } from 'react-router-dom';
// import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
// import GoogleMapReact from 'google-maps-react';
import TopNavContainer from '../nav_components/top_nav_container';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class BizShow extends React.Component {
  constructor(props) {
    super(props);
    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
  }

  componentDidMount() {
    this.props.getBiz(this.props.match.params.bizId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.bizId != this.props.match.params.bizId) {
      this.props.getBiz(this.props.match.params.bizId);
    }
  }

  handleNext() {
    const carouselSlide = document.querySelector('.biz-carousel-slide');
    const carouselImages = document.querySelectorAll('.biz-carousel-slide img');
    const firstImg = carouselImages[0];

    firstImg.remove();
    carouselSlide.appendChild(firstImg);
  }

  handlePrev() {
    const carouselSlide = document.querySelector('.biz-carousel-slide');
    const carouselImages = document.querySelectorAll('.biz-carousel-slide img');
    const lastImg = carouselImages[carouselImages.length - 1];

    lastImg.remove();
    carouselSlide.prepend(lastImg);
  }

  render() {
    const { biz } = this.props;
    if (!biz) {
      return null
    }

    const cityStateZip = `${biz.biz_city}, ${biz.biz_state} ${biz.biz_zipcode}`
    const bizUrl = (biz.biz_url !== "") ? (
      <div className="biz-url-container">
        <div><i className="material-icons">language</i></div>
        <div>{biz.biz_url}</div>
      </div>
      ) : "";

    let bizCat = biz.biz_first_cat;
    if (biz.biz_second_cat !== "") {
      bizCat = `${bizCat}, ${biz.biz_second_cat}`
    }
    if (biz.biz_third_cat !== "") {
      bizCat = `${bizCat}, ${biz.biz_third_cat}`
    }

    const currentUser = this.props.currentUser;
    const reviewForm = (currentUser !== undefined) ? (
      <div className="biz-review-form">
        <form>
          <textarea cols="100%" rows="10"></textarea>
        </form>
      </div>
    ) : ("");

    const mapStyles = {
      width: '250px',
      height: '150px',
    };

    const bizPics = biz.picUrls.map( (url, i) => {
      return (<img src={url} key={`pic${i}`} />)
    })

    const reviews = biz.reviews.map( (review, i) => {
      return (
        <div className="biz-comment-container">
          <div className="biz-comment-user">User Info Here</div>
          <div className="biz-comment-body-container">
            <div className="biz-comment-rating">{review.review_rating}</div>
            <div className="biz-comment-text">{review.review_body}</div>
            <div className="biz-comment-pics">Pic Here</div>
          </div>
        </div>
      )
    })

    return(

      <div>
        <TopNavContainer />
        <div className="nav-bar-menu">

        </div>

        <div className="biz-carousel-container">
          <i id="prevBtn" className="material-icons" onClick={this.handlePrev}>keyboard_arrow_left</i>
          <i id="nextBtn" className="material-icons" onClick={this.handleNext}>keyboard_arrow_right</i>
          <div className="biz-carousel-slide">
            {bizPics}
          </div>
        </div>

        <div className="biz-info-container">
          <div className="biz-sub-left">
            <div className="biz-quick-info">
              <div className="biz-name">{biz.biz_name}</div>
              <div className="biz-rating-container">
                <div className="biz-star-rating">Review Star Rating Here</div>
                <div className="biz-num-review"># of reviews here</div>
              </div>
              <div className="biz-general-info">
                <div className="biz-price">{biz.biz_price_range}</div>
                <div className="biz-first-cat">{bizCat}</div>
                <div className="biz-edit-button"><button className="btn-biz-show">Edit</button></div>
              </div>
              <div className="biz-social-bar">
                <div className="btn-write-review">
                  <button className="btn-biz-show">
                    <i className="material-icons">star</i>Write a Review
                  </button>
                </div>
                <div className="btn-add-photo">
                  <button className="btn-biz-show">
                    <i className="material-icons">add_a_photo</i>Add Photo
                  </button>
                </div>
                <div className="btn-share">
                  <button className="btn-biz-show">
                    <i className="material-icons">share</i>Share
                  </button>
                </div>
                <div className="btn-save">
                  <button className="btn-biz-show">
                    <i className="material-icons">bookmark</i>Save
                  </button>
                </div>
              </div>
            </div>
            
            <div className="biz-loc-hrs-header">Location & Hours</div>
            
            <div className="biz-loc-hrs-container">           
              <div className="biz-loc-container">
                
                <div className="biz-map" id="googleMap" style={mapStyles}>
                  {/* <Map
                    google={this.props.google}
                    zoom={8}
                    style={mapStyles}
                    initialCenter={{ lat: 47.444, lng: -122.176 }}
                  /> */}
                </div>
                <div className="biz-address">
                  <div>{biz.biz_address}</div>
                  <div>{cityStateZip}</div>
                </div>
              </div>
              <div className="biz-hrs-container">
                <div>{biz.biz_mo_hrs}</div>
                <div>{biz.biz_tu_hrs}</div>
                <div>{biz.biz_we_hrs}</div>
                <div>{biz.biz_th_hrs}</div>
                <div>{biz.biz_fr_hrs}</div>
                <div>{biz.biz_sa_hrs}</div>
                <div>{biz.biz_su_hrs}</div>
              </div>
            </div>

            <div className="startReviewSection">
              Reviews
            </div>
                   
            <div className="biz-comments-container">
              {reviews}
              <div className="biz-comment-container">
                <div className="biz-comment-user">User Info Here</div>
                <div className="biz-comment-body-container">
                  <div className="biz-comment-rating">Rating Here</div>
                  <div className="biz-comment-text">Comment Here</div>
                  <div className="biz-comment-pics">Pic Here</div>
                </div>
              </div>

              <div className="biz-comment-container">
                <div className="biz-comment-user">User Info Here</div>
                <div className="biz-comment-body-container">
                  <div className="biz-comment-rating">Rating Here</div>
                  <div className="biz-comment-text">Comment Here</div>
                  <div className="biz-comment-pics">Pic Here</div>
                </div>
              </div>

              <div className="biz-comment-container">
                <div className="biz-comment-user">User Info Here</div>
                <div className="biz-comment-body-container">
                  <div className="biz-comment-rating">Rating Here</div>
                  <div className="biz-comment-text">Comment Here</div>
                  <div className="biz-comment-pics">Pic Here</div>
                </div>
              </div>
              
            </div>
          </div>

          <div className="biz-sub-right">
            <div className="biz-static-info-container">
              {bizUrl}

              <div className="biz-phone-container">
                <div><i className="material-icons">phone_in_talk</i></div>
                <div>{biz.biz_phone}</div>
              </div>

              <div className="biz-address-container">
                <div><i className="material-icons">directions</i></div>
                <div className="biz-address">
                  <div>{biz.biz_address}</div>
                  <div>{cityStateZip}</div>
                </div>
              </div>

              <div className="biz-known-for-container" id="biz-known-for-container">
                <div>
                  <div><i className="material-icons">local_parking</i></div>
                  <div>Parking: {biz.biz_parking}</div>
                </div>
                <div>
                  <div><i className="material-icons">directions_car</i></div>
                  <div>Delivery: {biz.biz_delivery}</div>
                </div>
                <div>
                  <div><i className="material-icons">shopping_basket</i></div>
                  <div>Takeout: {biz.biz_takeout}</div>
                </div>
                <div>
                  <div><i className="material-icons">calendar_today</i></div>
                  <div>Reservations: {biz.biz_reservations}</div>
                </div>
              </div>

            </div>            
          </div>
        </div>
      </div>
    )
  }
}

export default BizShow;
// export default GoogleApiWrapper({
//   apiKey: 'AIzaSyD9Ef-amJ3Cvg1T8w5yb15HPz8MMF47b6Q'
// })(BizShow);