import React from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';

import App from './components/App';

import Home from './views/Home/Home';
import Detail from './views/Detail/Detail';

const Routes = routeProps => (
  <App location={routeProps.location}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/:id" component={Detail} />
    </Switch>
  </App>
);

export default withRouter(Routes);
