import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import TopNav from '../nav_components/top_nav_container';

class BizIndex extends React.Component {
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
    };
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
<<<<<<< HEAD
=======
    }

    let liveResult = document.getElementsByClassName('live-result');
    if (liveResult) {
      liveResult[0].style.display = 'none';
>>>>>>> 4f097902ac7a5217e8df7bfb4c5fbfa7668b9568
    }
    const query = JSON.stringify(this.state);
    this.props.searchBiz(query);
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
<<<<<<< HEAD
      const query = JSON.stringify({ keyword, near });
      this.props.searchBiz(query);
=======

      let liveResult = document.getElementsByClassName('live-result');
      if (liveResult) {
        liveResult[0].style.display = 'none';
      }
>>>>>>> 4f097902ac7a5217e8df7bfb4c5fbfa7668b9568
    }
  }

  ratingGen(rating) {
    const checkedStars = [];
    const uncheckStars = [];

    if (rating === 0) {
      for (let i = 0; i < 5; i++) {
        const noStar = (
          <i className='material-icons' key={`nostar-${i}`}>
            star
          </i>
        );
        uncheckStars.push(noStar);
      }
    } else if (rating % 1 !== 0) {
      for (let i = 0; i < rating - 1; i++) {
        const star = (
          <i className='material-icons checked' key={`star-${i}`}>
            star
          </i>
        );
        checkedStars.push(star);
      }

      checkedStars.push(
        <i className='material-icons half checked' key={`star-half`}>
          star_half
        </i>
      );

      for (let i = 0; i < 4 - rating; i++) {
        const noStar = (
          <i className='material-icons' key={`nostar-${i}`}>
            star
          </i>
        );
        uncheckStars.push(noStar);
      }
    } else {
      for (let i = 0; i < rating; i++) {
        const star = (
          <i className='material-icons checked' key={`star-${i}`}>
            star
          </i>
        );
        checkedStars.push(star);
      }

      for (let i = 0; i < 5 - rating; i++) {
        const noStar = (
          <i className='material-icons' key={`nostar-${i}`}>
            star
          </i>
        );
        uncheckStars.push(noStar);
      }
    }

    return (
      <div className='review-avg-star-rating'>
        {checkedStars}
        {uncheckStars}
      </div>
    );
  }

  render() {
    const biz = this.props.biz.map((el, i) => {
      const bizPics = el.picUrls.map((url, j) => {
        return <img src={url} key={`pic${j}`} />;
      });

      let bizCat = el.biz_first_cat;
      if (el.biz_second_cat !== '') {
        bizCat = `${bizCat}, ${el.biz_second_cat}`;
      }
      if (el.biz_third_cat !== '') {
        bizCat = `${bizCat}, ${el.biz_third_cat}`;
      }

      let reviewRating = 0;
      let reviewCounter = 0;
      el.reviews.map((review) => {
        reviewRating += review.review_rating;
        reviewCounter += 1;
      });

      return (
        <div className='biz-container' key={`biz-${i}`}>
          <div className='biz-pic'>{bizPics[0]}</div>
          <div className='info-container'>
            <div>
              <Link
                to={`/biz/${el.id}?keyword=${this.state.keyword}&near=${this.state.near}`}
              >
                {el.biz_name}
              </Link>
            </div>
            <div className='biz-rating-container'>
              {reviewCounter === 0
                ? this.ratingGen(0)
                : this.ratingGen(reviewRating / reviewCounter)}
              <div className='biz-num-review'>
                {reviewCounter === 0 ? 'No Review' : `${reviewCounter} reviews`}
              </div>
            </div>
            <div className='biz-cat'>{bizCat}</div>
            <div>{el.biz_phone}</div>
            <div>{el.biz_address}</div>
            <div>
              {el.biz_city}, {el.biz_state}
            </div>
          </div>
        </div>
      );
    });

    const noResult = (
      <div className='no-result'>
        <p>
          <span>Sorry, no result for </span>
          <span className='no-result-key'>{this.state.keyword}</span>
        </p>
        <p>Try searching for ramen or tea instead.</p>
      </div>
    );

    return (
      <div>
        <TopNav />
        <div className='biz-index-container'>
          {biz.length === 0 ? noResult : biz}
        </div>
      </div>
    );
  }
}

export default withRouter(BizIndex);
