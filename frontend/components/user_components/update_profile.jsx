import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import TopNavContainer from '../nav_components/top_nav_container';

class UpdateProfile extends React.Component {
  constructor(props) {
    super(props);
    const { id, username, email, fname, lname } = this.props.user;
    this.state = {
      id: id,
      username: username,
      email: email,
      fname: fname,
      lname: lname,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateField = this.updateField.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  updateField(field) {
    let that = this.state;
    return (e) => {
      let temp = this.state[field];
      console.log(temp);
      if (field === 'fname' || field === 'lname') {
        if (e.target.value.length > 0) {
          temp = e.target.value[0].toUpperCase() + e.target.value.slice(1);
        } else {
          temp = e.target.value;
        }
      } else {
        temp = e.target.value;
      }
      this.setState({ [field]: temp });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props
      .processForm(this.state)
      .then(() => this.props.history.push('/profile'));
  }

  render() {
    let usernameError = [];
    let emailError = [];
    let passwordError = [];
    const errors = this.props.errors;

    for (let i = 0; i < errors.length; i++) {
      if (errors[i].includes('Username')) {
        usernameError.push(errors[i]);
      } else if (errors[i].includes('Email')) {
        emailError.push(errors[i]);
      } else {
        passwordError.push(errors[i]);
      }
    }

    if (usernameError.length > 0) {
      document.getElementsByClassName('username')[0].className += ' form-error';
    }

    if (emailError.length > 0) {
      document.getElementsByClassName('email')[0].className += ' form-error';
    }

    if (passwordError.length > 0) {
      document.getElementsByClassName('password')[0].className += ' form-error';
    }

    return (
      <div className='login-page'>
        <TopNavContainer />
        <div className='login-form-container'>
          <div className='login-form-subcontainer'>
            <div className='update-form-header'>Update Your Profile</div>
            <form onSubmit={this.handleSubmit}>
              <label>
                <input
                  type='text'
                  className='fname'
                  placeholder='First Name'
                  value={this.state.fname}
                  required='required'
                  onChange={this.updateField('fname')}
                />
              </label>
              <br />

              <label>
                Last Name:
                <input
                  type='text'
                  className='lname'
                  placeholder='Last Name'
                  value={this.state.lname}
                  required='required'
                  onChange={this.updateField('lname')}
                />
              </label>
              <br />

              <label>
                Username:
                <input
                  type='text'
                  className='username'
                  placeholder='Username'
                  value={this.state.username}
                  required='required'
                  onChange={this.updateField('username')}
                />
              </label>
              <br />
              {usernameError.length > 0 ? (
                <div id='newuser-error'>{usernameError}</div>
              ) : (
                ''
              )}

              <label>
                Email:
                <input
                  type='email'
                  className='email'
                  placeholder='Email'
                  value={this.state.email}
                  required='required'
                  onChange={this.updateField('email')}
                />
              </label>
              <br />
              {emailError.length > 0 ? (
                <div id='newuser-error'>{emailError}</div>
              ) : (
                ''
              )}
              <button id='btn-session-login'>Update Profile</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(UpdateProfile);
