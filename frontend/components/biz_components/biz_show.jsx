import React from 'react';
import TopNavContainer from '../nav_components/top_nav_container';
import BizReviewFormContainer from '../review_components/review_form_container';
import BizReviewIndexContainer from '../review_components/review_index_container';
import GoogleMapReact from 'google-map-react';

class BizShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      review_body: "",
      review_rating: "",
      user_id: "",
      business_id: ""
    }
    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
    this.scrollPage = this.scrollPage.bind(this);
  }

  componentDidMount() {
    this.props.getBiz(this.props.match.params.bizId);
    this.props.clearErrors();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.bizId != this.props.match.params.bizId) {
      this.props.getBiz(this.props.match.params.bizId);
    }
  }

  updateField(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value })
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

  scrollPage() {
    document.getElementById('startReviewSection').scrollIntoView()
  }

  ratingGen(rating) {
    const checkedStars = [];
    const uncheckStars = [];

    if (rating === 0) {
      for (let i = 0; i < 5; i++) {
        const noStar = (<i className="material-icons" key={`nostar-${i}`}>star</i>)
        uncheckStars.push(noStar);
      }
    } else if (rating % 1 !== 0) {
      for (let i = 0; i < rating - 1; i++) {
        const star = (<i className="material-icons checked" key={`star-${i}`}>star</i>);
        checkedStars.push(star);
      }

      checkedStars.push(<i className="material-icons half checked" key={`star-half`}>star_half</i>)

      for (let i = 0; i < 4 - rating; i++) {
        const noStar = (<i className="material-icons" key={`nostar-${i}`}>star</i>)
        uncheckStars.push(noStar);
      }
    } else {
      for (let i = 0; i < rating; i++) {
        const star = (<i className="material-icons checked" key={`star-${i}`}>star</i>);
        checkedStars.push(star);
      }

      for (let i = 0; i < 5 - rating; i++) {
        const noStar = (<i className="material-icons" key={`nostar-${i}`}>star</i>)
        uncheckStars.push(noStar);
      }
    }

    return (
      <div className="review-avg-star-rating">
        {checkedStars}
        {uncheckStars}
      </div>
    )
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
        <div><a href={`http://www.${biz.biz_url}`} target="_blank">{biz.biz_url}</a></div>
      </div>
      ) : "";

    let bizCat = biz.biz_first_cat;
    if (biz.biz_second_cat !== "") {
      bizCat = `${bizCat}, ${biz.biz_second_cat}`
    }
    if (biz.biz_third_cat !== "") {
      bizCat = `${bizCat}, ${biz.biz_third_cat}`
    }

    const bizPics = biz.picUrls.map( (url, i) => {
      return (<img src={url} key={`pic${i}`} />)
    })

    let reviewRating = 0;
    let reviewCounter = 0;
    biz.reviews.map( review => {
      reviewRating += review.review_rating;
      reviewCounter += 1;
    })

    return(

      <div>
        <TopNavContainer />
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
                {reviewCounter === 0 ? this.ratingGen(0) : this.ratingGen(reviewRating / reviewCounter)}
                <div className="biz-num-review">
                  {reviewCounter === 0 ? "No Review" : `${reviewCounter} reviews`}
                </div>
              </div>
              <div className="biz-general-info">
                <div className="biz-price">{biz.biz_price_range}</div>
                <div className="biz-first-cat">{bizCat}</div>
                {/* <div className="biz-edit-button"><button className="btn-biz-show">Edit</button></div> */}
              </div>
              <div className="biz-social-bar">
                <div className="btn-write-review">
                  <button className="btn-biz-show" onClick={this.scrollPage}>
                    <i className="material-icons">star</i>Write a Review
                  </button>
                </div>
                {/* <div className="btn-add-photo">
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
                </div> */}
              </div>
            </div>
            
            <div className="biz-loc-hrs-header">Location & Hours</div>
            
            <div className="biz-loc-hrs-container">           
              <div className="biz-loc-container">
                <div className="biz-map" id="googleMap">
                  <div style={{ height: '100%', width: '100%' }}>
                    <GoogleMapReact
                      bootstrapURLKeys={{ key: "AIzaSyD9Ef-amJ3Cvg1T8w5yb15HPz8MMF47b6Q" }}
                      defaultCenter={{lat: biz.biz_lat, lng: biz.biz_lng}}
                      defaultZoom={12}
                    ></GoogleMapReact>
                  </div>
                </div>
                <div className="biz-address">
                  <div>{biz.biz_address}</div>
                  <div>{cityStateZip}</div>
                </div>
              </div>
              <div className="biz-hrs-container">
                <div>
                  <div className="biz-day">Mon</div>
                  <div className="biz-hr">{biz.biz_mo_hrs}</div>
                </div>
                <div>
                  <div className="biz-day">Tue</div>
                  <div className="biz-hr">{biz.biz_tu_hrs}</div>
                </div>
                <div>
                  <div className="biz-day">Wed</div>
                  <div className="biz-hr">{biz.biz_we_hrs}</div>
                </div>
                <div>
                  <div className="biz-day">Thu</div>
                  <div className="biz-hr">{biz.biz_th_hrs}</div>
                </div>
                <div>
                  <div className="biz-day">Fri</div>
                  <div className="biz-hr">{biz.biz_fr_hrs}</div>
                </div>
                <div>
                  <div className="biz-day">Sat</div>
                  <div className="biz-hr">{biz.biz_sa_hrs}</div>
                </div>
                <div>
                  <div className="biz-day">Sun</div>
                  <div className="biz-hr">{biz.biz_su_hrs}</div>
                </div>

              </div>
            </div>

            <div className="startReviewSection" id="startReviewSection">
              Reviews
            </div>
                   
            <div className="biz-comments-container">
              <BizReviewFormContainer />
              <BizReviewIndexContainer /> 
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
