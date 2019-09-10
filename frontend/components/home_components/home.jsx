import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class YeetHome extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <h2>Welcome to Yeet!</h2>
      </div>
    )
  }
}

export default withRouter(YeetHome);