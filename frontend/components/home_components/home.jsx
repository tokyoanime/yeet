import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class YeetHome extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    // debugger
  }

  render() {
    const currentUser = this.props.currentUser;
    const logout = this.props.logout;

    const display = (currentUser !== undefined) ? (
      <div className="nav-home-top">
        <div className="nav-home-greeting">Hello, {currentUser.username}</div>
        <button className="btn-home-logout" onClick={logout}>Log Out</button>
      </div>
      ) : (
        <div className="nav-home-top">
          <Link className="btn-home-login" to="/login">Log In</Link>
          <Link className="btn-home-signup" to="/newuser">Sign Up</Link>
        </div>
      );

    return(
      <div className="nav-home-main">
        {display}
        <div className="nav-home-logo">Logo Here</div>
        <div className="nav-home-search">Search Bar Here</div>
      </div>
    )
  }
}

export default withRouter(YeetHome);