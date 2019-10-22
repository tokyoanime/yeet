import React from 'react';

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.ratingGen = this.ratingGen.bind(this);
  }

  componentDidMount() {
    this.props.fetchReviews(this.props.match.params.bizId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.bizId != this.props.match.params.bizId) {
      this.props.fetchReviews(this.props.match.params.bizId);
    }
  }

  ratingGen(rating) {
    const checkedStars = [];
    const uncheckStars = [];

    for (let i = 0; i < rating; i++) {
      const star = (<i className="material-icons checked" key={`star-${i}`}>star</i>);
      checkedStars.push(star);
    }

    for (let i = 0; i < 5 - rating; i++) {
      const noStar = (<i className="material-icons" key={`nostar-${i}`}>star</i>)
      uncheckStars.push(noStar);
    }

    return (
      <div className="review-star-rating">
        {checkedStars}
        {uncheckStars}
      </div>
    )
  }

  render() {
    const { reviews } = this.props;
    const noReview = (
      <div className="biz-comment-container">
        There is currently no review available for this business. Be the first one to review this business.
      </div>
    )
    if (!reviews) {
      return null
    };

    if (reviews.length === 0) {
      return noReview;
    } else {
      const renderReview = reviews.reverse().map((review, i) => {
        return (
          <div className="biz-comment-container" key={`review-${i}`}>
            <div className="biz-comment-user">
              <div>
                {review.user_name}
              </div>
              <div>
                Edit Review
              </div>
            </div>
            <div className="biz-comment-body-container">
              {this.ratingGen(review.review_rating)}
              <div className="biz-comment-text">{review.review_body}</div>
              <div className="biz-comment-pics">Delete</div>
            </div>
          </div>
        )
      });
      return renderReview;
    }
    
  }
}

export default Review;