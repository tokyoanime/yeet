import React from 'react';

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.ratingGen = this.ratingGen.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.props.fetchReviews(this.props.match.params.bizId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.bizId != this.props.match.params.bizId) {
      this.props.fetchReviews(this.props.match.params.bizId);
    }
  }

  handleDelete(id) {
    this.props.deleteReview(id)
      .then( () => {
        this.props.fetchReviews(this.props.match.params.bizId);
        const msg = document.getElementsByClassName("biz-review-form");
        msg[0].innerHTML = "Your review has been deleted."
      });
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
    if (!reviews) {
      return null
    };

    const errors = this.props.reviewErr.map((err) => {
      return (
        <div className="login-error">{err}</div>
      )
    });

    const noReview = (
      <div className="biz-comment-container">
        There is currently no review available for this business. Be the first one to review this business.
      </div>
    );
    
    if (reviews.length === 0) {
      return noReview;
    } else {
      const renderReview = reviews.reverse().map((review, i) => {
        return (
          <div className="biz-comment-container" key={`review-${review.id}`}>
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
              {
                ((this.props.currentUser) && (this.props.currentUser.id === review.user_id)) ? (
                  <div className="biz-comment-delete" onClick={() => this.handleDelete(`${review.id}`)}>
                    <div>{(errors.length > 0) ? errors : ""}</div>
                    <div>Delete</div>
                  </div>
                ) : null
              }
            </div>
          </div>
        )
      });

      return renderReview;
    }
    
  }
}

export default Review;