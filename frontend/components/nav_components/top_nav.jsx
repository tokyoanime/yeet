import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import SearchContainer from '../search_components/search_container';

class TopNav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const currentUser = this.props.currentUser;
    const logout = this.props.logout;

    const sessionMenu =
      currentUser !== undefined ? (
        <div className='session-menu-container'>
          <div className='nav-top-greeting'>Hello, {currentUser.fname}</div>
          <div>
            <Link to='/profile'>View Profile</Link>
          </div>
          <div>
            <button id='btn-top-logout' onClick={logout}>
              Log Out
            </button>
          </div>
        </div>
      ) : (
        <div className='session-menu-container'>
          <div>
            <Link id='btn-top-login' to='/login'>
              Log In
            </Link>
          </div>
          <div>
            <Link id='btn-top-signup' to='/newuser'>
              Sign Up
            </Link>
          </div>
        </div>
      );

    return (
      <div className='nav-top-container'>
        <div className='nav-top-left logo'>
          <div>
            <Link to='/'>yeet!</Link>
          </div>
          <div className='session-menu-social'>
            <a href='https://github.com/tokyoanime/yeet' target='_blank'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='30'
                height='30'
                viewBox='0 0 24 24'
              >
                <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z' />
              </svg>
            </a>
            <a
              href='https://www.linkedin.com/in/lwin-ye-797a2558/'
              target='_blank'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='30'
                height='30'
                viewBox='0 0 24 24'
              >
                <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' />
              </svg>
            </a>
          </div>
        </div>
        <div className='nav-top-mid'>
          <SearchContainer />
        </div>
        <div className='nav-top-right'>{sessionMenu}</div>
      </div>
    );
  }
}

export default withRouter(TopNav);
