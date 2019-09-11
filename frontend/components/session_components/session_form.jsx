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
      <div>
        <div id="form-header">{this.props.formType}</div>
        <fieldset>
          {(errors.length > 0) ? <div id="login-error">{errors}</div> : ""}
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
    )
  }
}

export default withRouter(UserForm);