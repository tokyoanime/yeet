import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import TopNavContainer from '../nav_components/top_nav_container';

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
    this.ratingGen = this.ratingGen.bind(this);
    this.handlePostReview = this.handlePostReview.bind(this);
    this.updateRating = this.updateRating.bind(this);
    this.reviewForm = this.reviewForm.bind(this);
    this.handleDeleteReview = this.handleDeleteReview.bind(this);
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

  updateRating(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value })
    }
  }

  handlePostReview(e) {
    e.preventDefault();
    this.state.user_id = this.props.currentUser.id;
    this.state.business_id = this.props.biz.id;

    let temp = this.state;

    this.props.createReview(temp)
      .then(() => window.location.reload())

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

  ratingGen(rating) {
    const checkedStars = [];
    const uncheckStars = [];
    const star = (<i className="material-icons checked">star</i>)
    const noStar = (<i className="material-icons">star</i>)

    for (let i = 0; i < rating; i++) {
      checkedStars.push(star);
    }

    for (let i = 0; i < 5 - rating; i++) {
      uncheckStars.push(noStar);
    }

    return (
      <div className="review-star-rating">
        {checkedStars}
        {uncheckStars}
      </div>
    )
  }

  handleDeleteReview(id) {
    this.props.deleteReview(id)
      .then(() => window.location.reload())
  }

  reviewForm() {
    const errors = this.props.reviewErr.map((err) => {
      return (
        <div className="login-error">{err}</div>
      )
    });

    const userReviews = this.props.currentUser.reviews.map((review, i) => {
      if (this.props.biz.id === review.business_id) {
        return (
          <div className="biz-comment-container" key={`current-user-review-${i}`}>
            <div className="biz-comment-body-container">
              {this.ratingGen(review.review_rating)}
              <div className="biz-comment-text">{review.review_body}</div>
            </div>
            <div>
              <button onClick={() => this.handleDeleteReview(review.id)}>Delete Review</button>
            </div>
          </div>
        )
      }
    })

    return (
      <div>
        {(userReviews.length > 0) ? (<div className="current-user-reviews">Your reviews: {userReviews}</div>) : null}
        {(errors.length > 0) ? errors : ""}
        <div className="biz-review-form">
          <form onSubmit={this.handlePostReview}>
            <div className="star-rating-container">
              <input type="radio" id="rating-5" name="rating" value="5" onChange={this.updateRating('review_rating')} /><label>5</label>
              <input type="radio" id="rating-4" name="rating" value="4" onChange={this.updateRating('review_rating')} /><label>4</label>
              <input type="radio" id="rating-3" name="rating" value="3" onChange={this.updateRating('review_rating')} /><label>3</label>
              <input type="radio" id="rating-2" name="rating" value="2" onChange={this.updateRating('review_rating')} /><label>2</label>
              <input type="radio" id="rating-1" name="rating" value="1" onChange={this.updateRating('review_rating')} /><label>1</label>
            </div>
            <textarea rows="10" placeholder="Write your review here." onChange={this.updateField('review_body')}></textarea>
            <input type="submit" value="Post Review" />
          </form>
        </div>
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
        <div><a href={`http://www.${biz.biz_url}`}>{biz.biz_url}</a></div>
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
      this.reviewForm()
    ) : (
      <div className="biz-review-form">
          Please <Link to="/login">Log In</Link> to post a review.
      </div>
    );

    const bizPics = biz.picUrls.map( (url, i) => {
      return (<img src={url} key={`pic${i}`} />)
    })

    const reviews = biz.reviews.map( (review, i) => {
      return (
        <div className="biz-comment-container" key={`review-${i}`}>
          <div className="biz-comment-user">User Info Here</div>
          <div className="biz-comment-body-container">
            {this.ratingGen(review.review_rating)}
            <div className="biz-comment-text">{review.review_body}</div>
            <div className="biz-comment-pics"></div>
          </div>
        </div>
      )
    })

    return(

      <div>
        <TopNavContainer />
        {/* <div className="nav-bar-menu">

        </div> */}

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
                <div className="biz-map" id="googleMap">

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

            <div className="startReviewSection">
              Reviews
            </div>
                   
            <div className="biz-comments-container">
              {reviewForm}
              {reviews}
              {/* <div className="biz-comment-container">
                <div className="biz-comment-user">User Info Here</div>
                <div className="biz-comment-body-container">
                  <div className="biz-comment-rating">Rating Here</div>
                  <div className="biz-comment-text">Comment Here</div>
                  <div className="biz-comment-pics">Pic Here</div>
                </div>
              </div> */}
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