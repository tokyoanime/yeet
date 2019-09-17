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

    // const sectionStyle = {
    //   background: "url(" + { window.burgerURL } + ")"
    // }

    const display = (currentUser !== undefined) ? (
      <div>
        <div className="nav-home-greeting">Hello, {currentUser.fname}</div>
        <div><button id="btn-home-logout" onClick={logout}>Log Out</button></div>
      </div>
      ) : (
      <div>
        <div><Link id="btn-home-login" to="/login">Log In</Link></div>
        <div><Link id="btn-home-signup" to="/newuser">Sign Up</Link></div>
      </div>
      );

    return(
      <div className="nav-home-main">
        {display}
        <div className="nav-home-logo"><img src={window.yelpLogoURL} /></div>
        <div className="nav-home-search">Search Bar Here</div>
      </div>
    )
  }
}

export default withRouter(YeetHome);