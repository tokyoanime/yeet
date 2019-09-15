import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class BizShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        BizShow Page
      </div>
    )
  }
}

export default withRouter(BizShow);