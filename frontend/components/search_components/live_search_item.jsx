import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const LiveSearchResult = ({ results, keyword, near }) => {
  let liveResult = document.getElementsByClassName('live-result')[0];

  document.addEventListener('click', (e) => {
    if (e.target.className !== 'search-keyword' && liveResult) {
      liveResult.style.display = 'none';
    }
  });

  if (!jQuery.isEmptyObject(results) && keyword.length >= 2) {
    liveResult.style.display = 'inline-block';

    return Object.values(results).map((res, idx) => {
      return (
        <Fragment key={`liveSearch-${res.id}`}>
          <Link to={`/biz/${res.id}`}>
            <div>{`${idx + 1}. ${res.biz_name}`}</div>
          </Link>
        </Fragment>
      );
    });
  } else if (keyword.length >= 2 && jQuery.isEmptyObject(results)) {
    if (liveResult) {
      liveResult.style.display = 'inline-block';
    }
    return (
      <div>
        No search result for <span className='no-result-key'>{keyword}</span>{' '}
        near {near}
      </div>
    );
  } else {
    if (liveResult) {
      liveResult.style.display = 'none';
    }
    return <div></div>;
  }
};

export default LiveSearchResult;
