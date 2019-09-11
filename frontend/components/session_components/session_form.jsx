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
    this.props.login(this.state)
      .then( () => this.props.history.push('/'));
  }

  render() {
    const errors = this.props.errors;

    return(
      <div className="session-form">
        <div className="login-form-header">{this.props.formType}</div>
        <div className="login-form">
          <fieldset className="login-form-fieldset">
            {(errors.length > 0) ? <div className="login-error">{errors}</div> : ""}
            <form onSubmit={this.handleSubmit}>
              <label>
                <input
                  type="text"
                  placeholder="Username"
                  value={this.state.username}i
                  required="required"
                  onChange={this.updateField('username')}
                  />
              </label>
              <br/>

              <label>
                <input
                  type="password"
                  placeholder="Password"
                  required="required"
                  onChange={this.updateField('password')}
                />
              </label>
              <br/>

              <input type="submit" value={this.props.formType}/>
            </form>
          </fieldset>
        </div>
      </div>
    )
  }
}

export default withRouter(UserForm);