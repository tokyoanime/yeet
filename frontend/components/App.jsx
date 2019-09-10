import React from 'react';
import { Route, Switch, Link, HashRoute, Redirect } from 'react-router-dom';
import newUserContainer from './user_components/new_user_container';
import updateUserContainer from './user_components/update_user_container';

const App = () => (
  <div>
    <h2>Yeet!</h2>
    <Switch>
      <Route exact path="/newuser" component={newUserContainer} />
      <Route exact path="/updateUser" component={updateUserContainer} />
      {/* <Route exact path="/" component={} /> */}
    </Switch>
  </div>
);

export default App;