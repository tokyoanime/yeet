import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class TopNav extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    const currentUser = this.props.currentUser;
    const logout = this.props.logout;

    const sessionMenu = (currentUser !== undefined) ? (
      <div className="session-menu-container">
        <div className="nav-top-greeting">Hello, {currentUser.fname}</div>
        <div><button id="btn-top-logout" onClick={logout}>Log Out</button></div>
      </div>
    ) : (
        <div className="session-menu-container">
          <div><Link id="btn-top-login" to="/login">Log In</Link></div>
          <div><Link id="btn-top-signup" to="/newuser">Sign Up</Link></div>
        </div>
      );

    return (
      <div className="nav-top-container">
        <div className="nav-top-left"><Link to="/"><img className="login-form-logo" src={window.yelpLogoURL} /></Link></div>
        <div className="nav-top-mid">Search Bar Here</div>
        <div className="nav-top-right">{sessionMenu}</div>
      </div>
    ) 
  }
}

export default withRouter(TopNav);