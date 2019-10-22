import React from 'react';
import { Link } from 'react-router-dom';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.handlePostReview = this.handlePostReview.bind(this);
    this.updateField = this.updateField.bind(this);
    this.updateRating = this.updateRating.bind(this);
    this.state = {
      review_body: "",
      review_rating: "",
      review_posted: false
    }

  }

  componentDidMount() {
    this.props.clearErrors();
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
    const tempReview = {
      'review_body': this.state.review_body,
      'review_rating': this.state.review_rating,
      'user_id': this.props.currentUser.id,
      'business_id': this.props.match.params.bizId
    };

    this.props.createReview(tempReview)
      .then( () => {
        this.setState({ review_posted: true});
        this.props.fetchReviews(tempReview.business_id);
      })

  }

  render() {

    const errors = this.props.reviewErr.map((err) => {
      return (
        <div className="login-error">{err}</div>
      )
    });

    const reviewForm = (
      <form onSubmit={this.handlePostReview}>
        <div className="star-rating-container">
          <input type="radio" id="rating-5" name="rating" value="5" onChange={this.updateRating('review_rating')} /><label>5</label>
          <input type="radio" id="rating-4" name="rating" value="4" onChange={this.updateRating('review_rating')} /><label>4</label>
          <input type="radio" id="rating-3" name="rating" value="3" onChange={this.updateRating('review_rating')} /><label>3</label>
          <input type="radio" id="rating-2" name="rating" value="2" onChange={this.updateRating('review_rating')} /><label>2</label>
          <input type="radio" id="rating-1" name="rating" value="1" onChange={this.updateRating('review_rating')} /><label>1</label>
        </div>
        <textarea rows="10" placeholder="Write your review here." onChange={this.updateField('review_body')}>{this.state.review_body}</textarea>
        <input type="submit" value="Post Review" />
      </form>
    )

    const requestLogin = (
      <div>Please <Link to='/login'>login</Link> to post review.</div>
    )
    
    if (this.state.review_posted) {
      return(
        <div className="biz-review-form">
          Your review has been posted.
        </div>
      )
    } else {
      return (
        <div>
          {(errors.length > 0) ? errors : ""}
          <div className="biz-review-form">
            {(this.props.currentUser) ? reviewForm : requestLogin}
          </div>
        </div>
      )
    }
  }
  
}

export default ReviewForm;