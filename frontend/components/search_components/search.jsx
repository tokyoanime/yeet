import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
      near: "",
      filter: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateField = this.updateField.bind(this);
  }

  updateField(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const query = JSON.stringify(this.state);
    const keyword = this.state.keyword.split(" ").join("%20");
    const near = this.state.near.split(" ").join("%20");
    this.props.searchBiz(query)
      .then(() => this.props.history.push(`/search?keyword=${keyword}&near=${near}`));
  }

  getUrlVars() {
    let query = {};
    const parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
      query[key] = value;
    });
    return query;
  }

  componentDidMount() {
    let keyword = this.getUrlVars()["keyword"];
    let near = this.getUrlVars()["near"];

    let searchKey = document.getElementsByClassName("search-keyword")[0];
    let searchNear = document.getElementsByClassName("search-near")[0];

    if (keyword) {
      searchKey.value = keyword.split("%20").join(" ");
      searchNear.value = near.split("%20").join(" ");

      this.setState({ 'keyword': keyword.split("%20").join(" "), 'near': near.split("%20").join(" ")});
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.search !== this.props.location.search) {
      let keyword = this.getUrlVars()["keyword"];
      let near = this.getUrlVars()["near"];

      let searchKey = document.getElementsByClassName("search-keyword")[0];
      let searchNear = document.getElementsByClassName("search-near")[0];

      if (keyword) {
        searchKey.value = keyword.split("%20").join(" ");
        searchNear.value = near.split("%20").join(" ");

        this.setState({ 'keyword': keyword.split("%20").join(" "), 'near': near.split("%20").join(" ") });
      }
    }
  }

  render() {
    return (
      <div>
        <form className="search-form-container" onSubmit={this.handleSubmit}>
          <div className="search-fields">
            <div className="search-title">Find</div>
            <input
              type="text"
              placeholder="ramen, boba ..."
              className="search-keyword"
              onChange={this.updateField("keyword")}
            />
            <div className="search-holder"></div>
            <div className="search-title">Near</div>
            <input
              type="text"
              defaultValue="San Francisco"
              placeholder="San Francisco"
              className="search-near"
              onChange={this.updateField("near")}
            />
          </div>
          <div className="search-submit" onClick={this.handleSubmit}>
            <input type="submit" defaultValue="Search"/>
            <i className="material-icons">search</i>
          </div>
        </form>
      </div>
    )
  }
}

export default Search;