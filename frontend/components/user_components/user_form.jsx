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
      <div>
        <h2>{this.props.formType}</h2>
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <label>
              <input
                type="text"
                placeholder="Username"
                value={this.state.username}
                onChange={this.updateField('username')}
                />
            </label>
            <br/>
            {(usernameError.length > 0) ? <div id="form-error">{usernameError}</div> : ""}

            <label>
              <input
                type="text"
                placeholder="Email"
                value={this.state.email}
                onChange={this.updateField('email')}
              />
            </label>
            <br/>
            {(emailError.length > 0) ? <div id="form-error">{emailError}</div> : ""}

            <label>
              <input
                type="password"
                placeholder="Password"
                onChange={this.updateField('password')}
              />
            </label>
            <br/>
            {(passwordError.length > 0) ? <div id="form-error">{passwordError}</div> : ""}

            <input type="submit" value={this.props.formType}/>
          </fieldset>
        </form>
      </div>
    )
  }
}

export default withRouter(UserForm);