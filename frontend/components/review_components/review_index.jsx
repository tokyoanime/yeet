import React from 'react';
import { Link } from 'react-router-dom';

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.ratingGen = this.ratingGen.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.props.fetchReviews(this.props.match.params.bizId);
    this.props.clearErrors();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.bizId != this.props.match.params.bizId) {
      this.props.fetchReviews(this.props.match.params.bizId);
    }
  }

  handleDelete(id) {
    this.props.deleteReview(id).then(() => {
      const msg = document.getElementsByClassName(`review-${id}`);
      msg[0].innerHTML =
        "<div class='deleted-msg'>Your review has been deleted.</div>";
    });
  }

  ratingGen(rating) {
    const checkedStars = [];
    const uncheckStars = [];

    for (let i = 0; i < rating; i++) {
      const star = (
        <i className='material-icons checked' key={`star-${i}`}>
          star
        </i>
      );
      checkedStars.push(star);
    }

    for (let i = 0; i < 5 - rating; i++) {
      const noStar = (
        <i className='material-icons' key={`nostar-${i}`}>
          star
        </i>
      );
      uncheckStars.push(noStar);
    }

    return (
      <div className='review-star-rating'>
        {checkedStars}
        {uncheckStars}
      </div>
    );
  }

  render() {
    const { reviews } = this.props;
    if (!reviews) {
      return null;
    }

    const noReview = (
      <div className='biz-comment-container'>
        There is currently no review available for this business. Be the first
        one to review this business.
      </div>
    );

    if (reviews.length === 1 && reviews[0] === 'No Review Available') {
      return noReview;
    } else {
      const renderReview = reviews.reverse().map((review, i) => {
        return (
          <div
            className={`biz-comment-container review-${review.id}`}
            key={`review-${review.id}`}
          >
            <div className='biz-comment-user'>
              <div className='biz-comment-name'>{review.user_name}</div>
              <div className='biz-comment-edit'>
                {this.props.currentUser &&
                this.props.currentUser.id === review.user_id ? (
                  <Link to={`/reviews/${review.id}`}>Edit Review</Link>
                ) : null}
              </div>
            </div>
            <div className='biz-comment-body-container'>
              <div className='biz-comment-top'>
                {this.ratingGen(review.review_rating)}
                <div>
                  {review.created_at ? review.created_at.slice(0, 7) : null}
                </div>
              </div>

              <div className='biz-comment-text'>{review.review_body}</div>
              {this.props.currentUser &&
              this.props.currentUser.id === review.user_id ? (
                <div className='biz-comment-delete'>
                  <i
                    className='material-icons'
                    onClick={() => this.handleDelete(`${review.id}`)}
                  >
                    delete
                  </i>
                </div>
              ) : null}
            </div>
          </div>
        );
      });

      return renderReview;
    }
  }
}

export default Review;
