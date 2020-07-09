import React, { Component, Fragment } from 'react';
import TopNavContainer from '../nav_components/top_nav_container';

export default class Profile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.user) {
      const { id, username, email, fname, lname, reviews } = this.props.user;
      return (
        <Fragment>
          <TopNavContainer />
          <div>
            <div>
              <h3>Profile Overview:</h3>
              <div>Username: {username}</div>
              <div>Email: {email}</div>
              <div>First name: {fname}</div>
              <div>Last name: {lname}</div>
            </div>
            <div>
              <h4>You have a total of: {reviews.length} reviews</h4>
              {reviews.length > 0 ? <div>Reviews here</div> : null}
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
