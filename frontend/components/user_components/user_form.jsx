import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", email: "", password: "", fname: "", lname: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  updateField(field) {
    let that = this.state
    return (e) => {
      let temp = that[field];
      if (field === "fname" || field === "lname") {
        if (temp.length > 0) {
          temp = e.target.value[0].toUpperCase() + e.target.value.slice(1);
        } else {
          temp = e.target.value.toUpperCase();
        }
      } else {
        temp = e.target.value;
      }
      this.setState({ [field]: temp });
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
      <div className="login-page">
        <div className="nav-login-top">
          <div className="login-form-logo"><Link to="/">Logo Here</Link></div>
        </div>
        <div className="login-form-container">
          <div className="login-form-subcontainer">
            <div className="login-form-header">Sign Up for Yeet</div>
            <div className="login-form-subheader">Already on Yeet? <Link id="btn-login-signup" to="/login">Log In</Link></div>

            <form onSubmit={this.handleSubmit}>
              <label>
                <input
                  type="text"
                  className="input-field-fname"
                  placeholder="First Name"
                  value={this.state.fname}
                  required="required"
                  onChange={this.updateField('fname')}
                />
              </label>
              <br />

              <label>
                <input
                  type="text"
                  className="input-field-lname"
                  placeholder="Last Name"
                  value={this.state.lname}
                  required="required"
                  onChange={this.updateField('lname')}
                />
              </label>
              <br />

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

              <button id="btn-session-login">Sign Up</button>
            </form>
          </div>
          <div className="welcome-illustration-container">Pic Here!</div>
        </div>
      </div>
    )
  }
}

export default withRouter(UserForm);