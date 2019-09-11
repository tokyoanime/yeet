import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.user;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateField(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state)
      .then( () => this.props.history.push('/'));
  }

  render() {
    let usernameError = [];
    let emailError = [];
    let passwordError = [];
    const errors = this.props.errors;

    for (let i = 0; i < errors.length; i++) {
      if (errors[i].includes("Username")) {
        usernameError.push(errors[i])
      } else if (errors[i].includes("Email")) {
        emailError.push(errors[i])
      } else {
        passwordError.push(errors[i])
      }
    }

    return(
      <div className="login-form">
        <div className="nav-login-top">
          <div className="login-form-logo"><Link to="/">Logo Here</Link></div>
        </div>
        <div className="login-form-container">
          <div className="login-form-subcontainer">
            <div className="login-form-header">Sign Up for Yeet</div>
            <div className="login-form-subheader">Already on Yeet? <Link className="btn-login-signup" to="/login">Log In</Link></div>

            <form onSubmit={this.handleSubmit}>
              <label>
                <input
                  type="text"
                  placeholder="Username"
                  value={this.state.username}
                  required="required"
                  onChange={this.updateField('username')}
                />
              </label>
              <br />
              {(usernameError.length > 0) ? <div id="newuser-error">{usernameError}</div> : ""}

              <label>
                <input
                  type="email"
                  placeholder="Email"
                  value={this.state.email}
                  required="required"
                  onChange={this.updateField('email')}
                />
              </label>
              <br />
              {(emailError.length > 0) ? <div id="newuser-error">{emailError}</div> : ""}

              <label>
                <input
                  type="password"
                  placeholder="Password"
                  required="required"
                  onChange={this.updateField('password')}
                />
              </label>
              <br />
              {(passwordError.length > 0) ? <div id="newuser-error">{passwordError}</div> : ""}

              <button className="btn-session-login">Sign Up</button>
            </form>
          </div>
        </div>
        <div className="welcome-illustration-container">
        </div>
      </div>
    )
  }
}

export default withRouter(UserForm);