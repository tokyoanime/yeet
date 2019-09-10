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
    return(
      <div>
        <h2>{this.props.formType}</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Username:
            <input
              type="text"
              value={this.state.username}
              onChange={this.updateField('username')}
              />
          </label>
          <br/>

          <label>Password:
            <input
              type="password"
              onChange={this.updateField('password')}
            />
          </label>
          <br/>

          <input type="submit" value={this.props.formType}/>
        </form>
      </div>
    )
  }
}

export default withRouter(UserForm);