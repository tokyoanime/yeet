import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class YeetHome extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const currentUser = this.props.currentUser;
    const logout = this.props.logout;
    const display = currentUser ? (
      <div className="nav-top">
        <p>Hello, {currentUser.username}</p>
        <button onClick={logout}>Log Out</button>
      </div>
    ) : (
        <div className="nav-top">
          <Link className="btn-login" to="/login">Log In</Link>
          <Link className="btn-signup" to="/newuser">Sign Up</Link>
        </div>
      );

    return(
      <div className="nav-main">
        {display}
        <div className="nav-logo"><h2>Welcome to Yeet!</h2></div>
      </div>
    )
  }
}

export default withRouter(YeetHome);