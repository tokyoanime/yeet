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
      <div>
        <p>Hello, {currentUser.username}</p>
        <button onClick={logout}>Log Out</button>
      </div>
    ) : (
        <div>
          <Link className="btn" to="/newuser">Sign Up</Link>
          <Link className="btn" to="/login">Log In</Link>
        </div>
      );

    return(
      <div>
        <h2>Welcome to Yeet!</h2>
        {display}
      </div>
    )
  }
}

export default withRouter(YeetHome);