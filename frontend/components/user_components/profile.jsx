import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import TopNavContainer from '../nav_components/top_nav_container';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.renderReviews = this.renderReviews.bind(this);
    this.editReview = this.editReview.bind(this);
    this.deleteReview = this.deleteReview.bind(this);
  }

  componentDidMount() {
    this.props.getUser(this.props.user.id);
  }

  editReview(id) {
    this.props.history.push(`/reviews/${id}`);
  }

  deleteReview(id) {
    this.props.deleteReview(id).then(() => {
      const review = document.getElementsByClassName(`review-${id}`);
      console.log(review);
      review[0].innerHTML =
        '<td colspan="3" className="row-deleted" style="text-align: center; color: #d43434;">Review has been deleted.</td>';
    });
  }

  renderReviews(reviews) {
    return reviews.map((review) => {
      return (
        <tr key={review.id} className={`review-${review.id}`}>
          <td>
            <Link to={`/biz/${review.business_id}`}>{review.biz_name}</Link>
          </td>
          <td>{review.review_body}</td>
          <td>
            {/* <Link to={`/reviews/${review.id}`}>Edit Review</Link> */}
            <button onClick={() => this.editReview(review.id)}>
              Edit Review
            </button>
            <button
              className='btn-delete'
              onClick={() => this.deleteReview(review.id)}
            >
              Delete Review
            </button>
          </td>
        </tr>
      );
    });
  }

  render() {
    if (this.props.user) {
      const { id, username, email, fname, lname, reviews } = this.props.user;
      return (
        <Fragment>
          <TopNavContainer />
          <div className='profile-container'>
            <div>
              <h2>Profile Overview:</h2>
              <table>
                <tbody>
                  <tr>
                    <td>Username:</td>
                    <td>{username}</td>
                  </tr>
                  <tr>
                    <td>Email:</td>
                    <td>{email}</td>
                  </tr>
                  <tr>
                    <td>First Name:</td>
                    <td>{fname}</td>
                  </tr>
                  <tr>
                    <td>Last Name:</td>
                    <td>{lname}</td>
                  </tr>
                </tbody>
              </table>
              <Link to='/profile/edit'>Edit Profile</Link>
            </div>
            <br />
            <div>
              <h4>You have a total of: {reviews.length} reviews</h4>
              {reviews.length > 0 ? (
                <table>
                  <tbody>
                    <tr>
                      <th>Business Name</th>
                      <th>Your Review</th>
                      <th></th>
                    </tr>
                    {this.renderReviews(reviews)}
                  </tbody>
                </table>
              ) : null}
            </div>
          </div>
        </Fragment>
      );
    } else {
      this.props.history.push('/login');
      return <Fragment></Fragment>;
    }
  }
}
