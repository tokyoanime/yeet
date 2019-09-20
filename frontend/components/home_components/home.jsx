import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class YeetHome extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    const currentUser = this.props.currentUser;
    const logout = this.props.logout;

    // const sectionStyle = {
    //   background: "url(" + { window.burgerURL } + ")"
    // }

    const display = (currentUser !== undefined) ? (
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

    return(
      <div className="nav-home-main">
        <div className="nav-home-top">{display}</div>
        {/* <div className="nav-home-logo"><img src={window.yelpLogoURL} /></div> */}
        <div className="nav-home-logo">yeet!</div>
        <div className="nav-home-search"><Link to='/biz'>See All Businesses</Link></div>
      </div>
    )
  }
}

export default withRouter(YeetHome);