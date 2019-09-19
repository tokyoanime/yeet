import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { fetchReviews } from '../../util/review_util';

// class Review extends React.Component {
//   constructor(props) {
//     super(props);
//   }
// }

const Review = ({currentUser, bizId}) => {
  let reviews = [];
  fetchReviews(bizId).then( (result) => reviews = result)

  // debugger;
  return ("testing");
}

export default Review;