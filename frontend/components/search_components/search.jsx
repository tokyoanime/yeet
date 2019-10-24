import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <form className="search-form-container">
          <div className="search-fields">
            <div className="search-title">Find</div>
            <input type="text" placeholder="ramen, boba, popcorn chicken..." className="search-keyword" />
            <div className="search-holder">|</div>
            <div className="search-title">Near</div>
            <input type="text" className="search-near" />
          </div>
          <div className="search-submit">
            <input type="submit" value="Search" />
          </div>
        </form>
      </div>
    )
  }
}

export default Search;