import React from 'react';
import { Route, IndexRoute } from 'react-router';

import SmartApp from './pages/SmartApp';
import SmartTrip from './pages/SmartTrip';
import SmartSignIn from './pages/SmartSignIn';

const routes = (
  <Route>
    <Route path="/" component={ SmartSignIn } />
    <Route path="/app" component={ SmartApp }>
      <IndexRoute component={ SmartTrip } />
    </Route>
  </Route>
);

export default routes;
