import React from 'react';
import { Route, Switch, Link, HashRoute, Redirect } from 'react-router-dom';
import newUserContainer from './user_components/new_user_container';
import profileContainer from './user_components/profile_container';
import updateProfileContainer from './user_components/update_profile_container';
import YeetHome from './home_components/home_container';
import bizIndexContainer from './biz_components/biz_index_container';
import newSessionContainer from './session_components/new_session_container';
import bizShowContainer from './biz_components/biz_show_container';
import newBizContainer from './biz_components/new_biz_container';
import reviewEditContainer from './review_components/review_edit_container';
import AuthRoute from '../util/auth_route_util';
import NeedAuth from '../util/need_auth_util';

const App = () => (
  <div>
    <Switch>
      <AuthRoute exact path='/newuser' component={newUserContainer} />
      <AuthRoute exact path='/login' component={newSessionContainer} />
      <NeedAuth exact path='/profile' component={profileContainer} />
      <NeedAuth exact path='/profile/edit' component={updateProfileContainer} />
      <Route exact path='/search' component={bizIndexContainer} />
      <Route exact path='/biz/new' component={newBizContainer} />
      <Route exact path='/biz/:bizId' component={bizShowContainer} />
      <Route exact path='/reviews/:reviewId' component={reviewEditContainer} />
      <Route path='/' component={YeetHome} />
    </Switch>
  </div>
);

export default App;
