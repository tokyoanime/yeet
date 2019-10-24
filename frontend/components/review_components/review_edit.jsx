import React from 'react';
import TopNavContainer from '../nav_components/top_nav_container';

class ReviewEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      review_body: "",
      review_rating: "",
    }
    this.handleEditReview = this.handleEditReview.bind(this);
    this.updateRating = this.updateRating.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
    this.props.getReview(this.props.match.params.reviewId)
      .then( () => {
        if (this.state.review_body === "") {
          this.setState({
            id: this.props.review.id,
            review_body: this.props.review.review_body,
            review_rating: this.props.review.review_rating
          });
          this.genStar();
        }
      });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.reviewId !== this.props.match.params.reviewId) {
      this.props.getReview(this.props.match.params.reviewId)
        .then(() => {
          this.props.clearErrors();
          this.setState({ review_body: this.props.review.review_body, review_rating: this.props.review.review_rating });
          this.genStar();
        });
    }
  }

  genStar(rating) {
    const currentRating = rating || this.state.review_rating;

    for (let i = 1; i <= currentRating; i++) {
      const tempStar = document.getElementById(`star-${i}`)
      tempStar.style.color = "#FFA500";
    }

    for (let j = (currentRating + 1); j <= 5; j++) {
      const tempStar = document.getElementById(`star-${j}`)
      tempStar.style.color = "#DDDDDD";
    }
  }

  updateField(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value })
    }
  }

  updateRating(val) {
    this.genStar(val);
    this.setState({ review_rating: val });
  }

  handleEditReview(e) {
    e.preventDefault();
    this.props.updateReview(this.state)
      .then( () => this.props.history.push(`/biz/${this.props.review.business_id}`));
  }

  render() {
    const { review } = this.props;

    const errors = this.props.reviewErr.map((err) => {
      return (
        <div className="review-error">{err}</div>
      )
    });

    if (!review) {
      return null
    };

    const requireLogin = (
      <div>Log in to update review.</div>
    )

    const reviewForm = (
      <div className="review-edit-form-container">
        <div className="review-edit-form">
          {(errors.length > 0) ? errors : ""}
          <div className="review-biz-name">{review.biz_name}</div>
          <form onSubmit={this.handleEditReview}>
            <div className="star-rating-container">
              <i className="material-icons" id="star-1" onClick={() => this.updateRating(1)}>star</i>
              <i className="material-icons" id="star-2" onClick={() => this.updateRating(2)}>star</i>
              <i className="material-icons" id="star-3" onClick={() => this.updateRating(3)}>star</i>
              <i className="material-icons" id="star-4" onClick={() => this.updateRating(4)}>star</i>
              <i className="material-icons" id="star-5" onClick={() => this.updateRating(5)}>star</i>
            </div>
            <textarea placeholder="Write your review here." onChange={this.updateField('review_body')} defaultValue={review.review_body}></textarea>
            {((this.props.currentUser) && (this.props.currentUser.id === review.user_id)) ? (
              <input className="submit-bttn" type="submit" value="Update Review" />) : requireLogin}
          </form>
        </div>
      </div>
    )

    return (
      <div>
        <TopNavContainer />
        {reviewForm}
      </div>
    )
  }
}

export default ReviewEdit;