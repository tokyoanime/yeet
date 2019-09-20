import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import TopNav from '../nav_components/top_nav';

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.user;
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
      .then( () => this.props.history.goBack());
  }

  handleDemoLogin() {
    let demoUsername = "demoUser".split('');
    let demoPassword = "password".split('');
    let userTimer = 0;
    let passTimer = 0;
    this.setState({ username: '', password: '' });
    document.getElementById('btn-demo-login').setAttribute('disabled','true');
    document.getElementById('btn-session-login').setAttribute('disabled','true');

    const typeUsername = (i) => {
      let uName = this.state.username + i;
      this.setState({username: uName})
    }

    const typePassword = (j) => {
      let uPass = this.state.password + j;
      this.setState({password: uPass})
    }

    for (let i = 0; i < demoUsername.length; i++) {
      userTimer += 50;
      setTimeout(() => typeUsername(demoUsername[i]), userTimer);
    }

    for (let j = 0; j < demoPassword.length; j++) {
      passTimer += 50;
      setTimeout(() => typePassword(demoPassword[j]), passTimer);
    }

    const loginUser = () => {
      if (this.state.username === "demoUser" && this.state.password === "password") {
        clearInterval(test);
        this.props.login(this.state)
          .then(() => this.props.history.push('/biz'));
      }
    }

    const test = setInterval(loginUser, 500);
  }

  render() {
    const errors = this.props.errors;

    return(
      <div className="login-page">
        <TopNav />
        <div className="login-form-container">
          <div className="login-form-subcontainer">
            <div className="login-form-header">Log In to Yeet</div>
            <div className="login-form-subheader">New to Yeet? <Link id="btn-login-signup" to="/newuser">Sign Up</Link></div>

            <button id="btn-demo-login" onClick={this.handleDemoLogin}>Log In As Demo User</button>

            <fieldset className="wrapper-line">
              <legend>OR</legend>
            </fieldset>
            
            {(errors.length > 0) ? <div className="login-error">{errors}</div> : ""}
            <form onSubmit={this.handleSubmit}>
              <label>
                <input
                  type="text"
                  id="username"
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
                  id="password"
                  placeholder="Password"
                  value={this.state.password}
                  required="required"
                  onChange={this.updateField('password')}
                />
              </label>
              <br/>
              <button id="btn-session-login">Log In</button>
            </form>
          </div>
          <div className="welcome-illustration-container"><img src={window.yelpWelcomeURL} /></div>
        </div>
      </div>
    )
  }
}

export default withRouter(UserForm);