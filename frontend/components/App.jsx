import React from 'react';
import { Route, Switch, Link, HashRoute, Redirect } from 'react-router-dom';

const App = () => (
  <div>
    <h2>Yeet!</h2>

    <Switch>
      <AuthRoute exact path="/login" component={} />
      <AuthRoute exact path="/signup" component={} />
      <Route exact path="/" component={} />
    </Switch>
  </div>
);

export default App;