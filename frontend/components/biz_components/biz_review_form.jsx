import React from 'react';

class BizReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.handlePostReview = this.handlePostReview.bind(this);
    this.updateField = this.updateField.bind(this);
    this.updateRating = this.updateRating.bind(this);
    this.state = {
      review_body: "",
      review_rating: "",
      user_id: "",
      business_id: ""
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
      .then(() => window.location.reload());
  }

  render() {

    const errors = this.props.reviewErr.map((err) => {
      return (
        <div className="login-error">{err}</div>
      )
    });

    return (
      <div>
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
            <textarea rows="10" placeholder="Write your review here." onChange={this.updateField('review_body')}>{this.state.review_body}</textarea>
            <input type="submit" value="Post Review" />
          </form>
        </div>
      </div>
    )
  }
  
}

export default BizReviewForm;