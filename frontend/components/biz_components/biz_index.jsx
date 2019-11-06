import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import TopNav from '../nav_components/top_nav_container'

class BizIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  getUrlVars() {
    let query = {};
    const parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
      query[key] = value;
    });
    return query;
  }

  componentDidMount() {
    this.props.clearErrors();

    let keyword = this.getUrlVars()["keyword"].split("%20").join(" ");
    let near = this.getUrlVars()["near"].split("%20").join(" ");

    const query = JSON.stringify({keyword, near});
    this.props.searchBiz(query);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.search !== this.props.location.search) {
      let keyword = this.getUrlVars()["keyword"].split("%20").join(" ");
      let near = this.getUrlVars()["near"].split("%20").join(" ");

      const query = JSON.stringify({ keyword, near });
      this.props.searchBiz(query);
    }

  }

  render() {
    
    const biz = this.props.biz.map( (el, i) => {

      const bizPics = el.picUrls.map((url, j) => {
        return (<img src={url} key={`pic${j}`} />)
      })

      let bizCat = el.biz_first_cat;
      if (el.biz_second_cat !== "") {
        bizCat = `${bizCat}, ${el.biz_second_cat}`
      }
      if (el.biz_third_cat !== "") {
        bizCat = `${bizCat}, ${el.biz_third_cat}`
      }

      return (
        <div className="biz-container" key={`biz-${i}`}>
          <div className="biz-pic">
            {bizPics[0]}
          </div>
          <div className="info-container">
            <div>
              <Link to={`/biz/${el.id}`}>{el.biz_name}</Link>
            </div>
            <div className="biz-cat">
              {bizCat}
            </div>
            <div>
              {el.biz_phone}
            </div>
            <div>
              {el.biz_address}
            </div>
            <div>
              {el.biz_city}, {el.biz_state}
            </div>
          </div>
        </div>
      )
    })


    return(
      <div>
        <TopNav />
        <div className="biz-index-container">
          {biz}
        </div>
      </div>
    )
  }
}

export default withRouter(BizIndex);