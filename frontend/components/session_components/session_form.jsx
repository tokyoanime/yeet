import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  updateField(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state)
      .then( () => this.props.history.push('/'));
  }

  handleDemoLogin() {
    let demoUserName = "demoUser".split('');
    let demoPassword = "password".split('');

    for (let i = 0; i < demoUserName.length; i++) {
      
    }

    for (let j = 0; j < demoPassword.length; j++) {
      
    }
  }

  render() {
    const errors = this.props.errors;

    return(
      <div className="login-form">
        <div className="nav-login-top">
          <div className="login-form-logo"><Link to="/">Logo Here</Link></div>
        </div>
        <div className="login-form-container">
          <div className="login-form-subcontainer">
            <div className="login-form-header">Log In to Yeet</div>
            <div className="login-form-subheader">New to Yeet? <Link className="btn-login-signup" to="/newuser">Sign Up</Link></div>

            <button className="btn-demo-login" onClick={this.handleDemoLogin}>Log In As Demo User</button>

            <fieldset className="wrapper-line">OR</fieldset>
            
            {(errors.length > 0) ? <div className="login-error">{errors}</div> : ""}
            <form onSubmit={this.handleSubmit}>
              <label>
                <input
                  type="text"
                  className="username"
                  placeholder="Username"
                  value={this.state.username}
                  required="required"
                  onChange={this.updateField('username')}
                  />
              </label>
              <br/>

              <label>
                <input
                  type="password"
                  className="password"
                  placeholder="Password"
                  required="required"
                  onChange={this.updateField('password')}
                />
              </label>
              <br/>
              <button className="btn-session-login">Log In</button>
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