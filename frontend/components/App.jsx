import React from 'react';
import { Route, Switch, Link, HashRoute, Redirect } from 'react-router-dom';
import newUserContainer from './user_components/new_user_container';
import updateUserContainer from './user_components/update_user_container';
import YeetHome from './home_components/home_container';
import newSessionContainer from './session_components/new_session_container';
import AuthRoute from '../util/route_util';

const App = () => (
  <div>
    <Switch>
      <AuthRoute exact path="/newuser" component={newUserContainer} />
      <AuthRoute exact path="/updateUser" component={updateUserContainer} />
      <AuthRoute exact path="/login" component={newSessionContainer} />
      <Route path="/" component={YeetHome} />
    </Switch>
  </div>
);

export default App;