import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const LiveSearchResult = ({ results, keyword, near }) => {
  let liveResult = document.getElementsByClassName('live-result');

  if (results && results.length > 0 && keyword.length >= 2) {
    liveResult[0].style.display = 'inline-block';

    document.addEventListener('click', (e) => {
      if (e.target.className !== 'search-keyword') {
        liveResult[0].style.display = 'none';
      }
      if (!results) {
        liveResult[0].style.display = 'none';
      }
    });

    return Object.values(results).map((res, idx) => {
      return (
        <Fragment>
          <div key={res.id}>
            <Link to={`/biz/${res.id}`}>{`${idx + 1}. ${res.biz_name}`}</Link>
          </div>
        </Fragment>
      );
    });
  } else {
    if (keyword.length >= 2) {
      return (
        <div>
          No search result for {keyword} near {near}
        </div>
      );
    } else {
      if (liveResult[0]) {
        liveResult[0].style.display = 'none';
      }
      return <div></div>;
    }
  }
};

export default LiveSearchResult;
