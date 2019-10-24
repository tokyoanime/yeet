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

  updateRating(val) {
    this.genStar(val);
    this.setState({ review_rating: val });
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

  render() {

    const errors = this.props.reviewErr.map((err) => {
      return (
        <div className="review-error">{err}</div>
      )
    });

    const reviewForm = (
      <form onSubmit={this.handlePostReview}>
        <div className="star-rating-container">
          <i className="material-icons" id="star-1" onClick={() => this.updateRating(1)}>star</i>
          <i className="material-icons" id="star-2" onClick={() => this.updateRating(2)}>star</i>
          <i className="material-icons" id="star-3" onClick={() => this.updateRating(3)}>star</i>
          <i className="material-icons" id="star-4" onClick={() => this.updateRating(4)}>star</i>
          <i className="material-icons" id="star-5" onClick={() => this.updateRating(5)}>star</i>
        </div>
        <textarea rows="10" placeholder="Write your review here." onChange={this.updateField('review_body')}>{this.state.review_body}</textarea>
        <input type="submit" value="Post Review" />
      </form>
    )

    const requestLogin = (
      <div>Please <Link to='/login'>login</Link> to post/edit review.</div>
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