import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Review extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // debugger;
    this.props.getReview(this.props.match.params.reviewId)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.reviewId != this.props.match.params.reviewId) {
      this.props.getReview(this.props.match.params.reviewId);
    }
  }

  render() {
    const { review } = this.props;
    if (!review) {
      return null
    }

    <div>
      {review}
    </div>
  }
}

export default Review;