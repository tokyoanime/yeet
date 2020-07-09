import React from 'react';
import LiveSearchResult from './live_search_item';

class Search extends React.Component {
  constructor(props) {
    super(props);

    let keyword = this.getUrlVars()['keyword'];
    let near = this.getUrlVars()['near'];

    if (keyword) {
      keyword = keyword.split('%20').join(' ');
    }
    if (near) {
      near = near.split('%20').join(' ');
    }

    this.state = {
      keyword: keyword || '',
      near: near || 'San Francisco',
      filter: '',
      results: this.props.liveResult || {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateField = this.updateField.bind(this);
  }

  updateField(field) {
    return (e) => {
      if (e.currentTarget.value.length >= 2 && field === 'keyword') {
        const query = JSON.stringify({
          keyword: e.currentTarget.value,
          near: this.state.near,
        });
        this.props.liveSearch(query).then((res) => {
          this.setState({ results: Object.values(res.res) });
        });
      } else if (e.currentTarget.value.length < 2 && field === 'keyword') {
        this.setState({ results: {} });
      }
      if (field === 'near') {
        const query = JSON.stringify({
          keyword: this.state.keyword,
          near: e.currentTarget.value,
        });
        this.props.liveSearch(query).then((res) => {
          this.setState({ results: Object.values(res.res) });
        });
      } else if (e.currentTarget.value.length < 2 && field === 'near') {
        this.setState({ results: {} });
      }
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const query = JSON.stringify({
      keyword: this.state.keyword,
      near: this.state.near,
    });
    this.props
      .searchBiz(query)
      .then(() =>
        this.props.history.push(
          `/search?keyword=${this.state.keyword}&near=${this.state.near}`
        )
      );
  }

  getUrlVars() {
    let query = {};
    const parts = window.location.href.replace(
      /[?&]+([^=&]+)=([^&]*)/gi,
      function (m, key, value) {
        query[key] = value;
      }
    );
    return query;
  }

  componentDidMount() {
    let keyword = this.getUrlVars()['keyword'];
    let near = this.getUrlVars()['near'];

    let searchKey = document.getElementsByClassName('search-keyword')[0];
    let searchNear = document.getElementsByClassName('search-near')[0];

    if (keyword) {
      searchKey.value = keyword.split('%20').join(' ');
      searchNear.value = near
        .split('%20')
        .join(' ')
        .replace(/(^\w{1})|(\s+\w{1})/g, (match) => match.toUpperCase());

      this.setState({
        keyword: keyword.split('%20').join(' '),
        near: near.split('%20').join(' '),
      });
    }

    const query = JSON.stringify({
      keyword: this.state.keyword,
      near: this.state.near,
    });
    this.props.liveSearch(query).then((res) => {
      this.setState({ results: Object.values(res.res) });
    });

    let liveResult = document.getElementsByClassName('live-result')[0];
    if (liveResult) {
      liveResult.style.display = 'none';
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.search !== this.props.location.search) {
      let keyword = this.getUrlVars()['keyword'];
      let near = this.getUrlVars()['near'];

      let searchKey = document.getElementsByClassName('search-keyword')[0];
      let searchNear = document.getElementsByClassName('search-near')[0];

      if (keyword) {
        searchKey.value = keyword.split('%20').join(' ');
        searchNear.value = near
          .split('%20')
          .join(' ')
          .replace(/(^\w{1})|(\s+\w{1})/g, (match) => match.toUpperCase());

        this.setState({
          keyword: keyword.split('%20').join(' '),
          near: near.split('%20').join(' '),
        });
      }

      const query = JSON.stringify({
        keyword: this.state.keyword,
        near: this.state.near,
      });
      this.props.liveSearch(query).then((res) => {
        this.setState({ results: Object.values(res.res) });
      });

      let liveResult = document.getElementsByClassName('live-result')[0];
      if (liveResult) {
        liveResult.style.display = 'none';
      }
    }
  }

  render() {
    return (
      <div>
        <form
          className='search-form-container'
          autoComplete='off'
          onSubmit={this.handleSubmit}
        >
          <div className='search-fields'>
            <div className='search-title'>Find</div>
            <input
              type='text'
              placeholder='ramen, boba ...'
              className='search-keyword'
              onChange={this.updateField('keyword')}
            />
            <div className='live-result'>
              <LiveSearchResult
                results={this.state.results}
                keyword={this.state.keyword}
                near={this.state.near}
              />
            </div>
            <div className='search-holder'></div>
            <div className='search-title'>Near</div>
            {/* <input
              type='text'
              // defaultValue='San Francisco'
              value={this.state.near}
              placeholder='San Francisco'
              className='search-near'
              onChange={this.updateField('near')}
            /> */}
            <select
              name='near'
              className='search-near'
              onChange={this.updateField('near')}
              defaultValue={this.state.near}
            >
              <option value='San Francisco'>San Francisco</option>
              <option value='San Jose'>San Jose</option>
              <option value='Oakland'>Oakland</option>
            </select>
          </div>
          <div className='search-submit' onClick={(e) => this.handleSubmit(e)}>
            <input type='submit' defaultValue='Search' />
            <i className='material-icons'>search</i>
          </div>
        </form>
      </div>
    );
  }
}

export default Search;
