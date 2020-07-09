import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import TopNavContainer from '../nav_components/top_nav_container';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.renderReviews = this.renderReviews.bind(this);
    this.editReview = this.editReview.bind(this);
    this.deleteReview = this.deleteReview.bind(this);
    this.toggleTable = this.toggleTable.bind(this);
  }

  componentDidMount() {
    if (this.props.user) {
      this.props.getUser(this.props.user.id);
    }
  }

  editReview(id) {
    this.props.history.push(`/reviews/${id}`);
  }

  deleteReview(id) {
    this.props.deleteReview(id).then(() => {
      const review = document.getElementsByClassName(`review-${id}`);
      review[0].innerHTML =
        '<td colspan="3" className="row-deleted" style="text-align: center; color: #d43434;">Review has been deleted.</td>';
    });
  }

  toggleTable() {
    const table = document.getElementsByClassName(`review-table`);
    const numberOfRows = table[0].childNodes[1].childElementCount;
    const body = table[0].childNodes[1];
    const toggleText = document.getElementsByClassName(`table-toggle`);

    for (let i = 5; i < numberOfRows; i++) {
      if (body.childNodes[i].hidden) {
        body.childNodes[i].hidden = false;
        toggleText[0].innerHTML = 'Show Only Recent Reviews';
      } else {
        body.childNodes[i].hidden = true;
        toggleText[0].innerHTML = 'Show All Reviews';
      }
    }
  }

  renderReviews(reviews) {
    return reviews.map((review, idx) => {
      return (
        <tr
          key={review.id}
          className={`review-${review.id}`}
          hidden={idx > 4 ? true : false}
        >
          <td className='review-business-name'>
            <Link to={`/biz/${review.business_id}`}>{review.biz_name}</Link>
          </td>
          <td className='review-body'>{review.review_body}</td>
          <td className='btns'>
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
    if (!this.props.user) {
      return null;
    }

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
              <table className='review-table'>
                <thead>
                  <tr hidden={reviews.length > 5 ? false : true}>
                    <td
                      colSpan='3'
                      className='table-toggle'
                      onClick={this.toggleTable}
                    >
                      Show All Reviews
                    </td>
                  </tr>
                  <tr>
                    <th>Business Name</th>
                    <th colSpan='2'>Your Review</th>
                  </tr>
                </thead>
                <tbody>{this.renderReviews(reviews)}</tbody>
              </table>
            ) : null}
          </div>
        </div>
      </Fragment>
    );
  }
}
