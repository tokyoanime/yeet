import React from 'react';
import { Route, Switch, Link, HashRoute, Redirect } from 'react-router-dom';
import newUserContainer from './user_components/new_user_container';
import updateUserContainer from './user_components/update_user_container';
import YeetHome from './home_components/home'

const App = () => (
  <div>
    <Switch>
      <Route exact path="/newuser" component={newUserContainer} />
      <Route exact path="/updateUser" component={updateUserContainer} />
      <Route exact path="/" component={YeetHome} />
    </Switch>
  </div>
);

export default App;