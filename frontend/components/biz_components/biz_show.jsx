import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class BizShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.biz
  }

  componentDidMount() {
    this.props.getBiz(this.state.id);
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