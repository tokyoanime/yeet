import React from 'react';
import { Link } from 'react-router-dom';

const SearchResultItem = ({ result }) => (
  <div className='search-result-item'>
    <div>
      <Link to={`/businesses/${result.id}`}>
        <li>{result.biz_name}</li>
      </Link>
    </div>
  </div>
);

export default SearchResultItem;
