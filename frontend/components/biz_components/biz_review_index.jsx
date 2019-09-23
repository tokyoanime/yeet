import React from 'react';

const BizReviewIndex = ({reviews}) => {
  const ratingGen = (rating) => {
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

  const renderReview = reviews.map((review, i) => {
    return (
      <div className="biz-comment-container" key={`review-${i}`}>
        <div className="biz-comment-user">User Info Here</div>
        <div className="biz-comment-body-container">
          {ratingGen(review.review_rating)}
          <div className="biz-comment-text">{review.review_body}</div>
          <div className="biz-comment-pics"></div>
        </div>
      </div>
    )
  })

  return renderReview;
}

export default BizReviewIndex;