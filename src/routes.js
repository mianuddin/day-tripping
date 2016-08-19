import React from 'react';
import { Route, IndexRoute } from 'react-router';

import SmartApp from './pages/SmartApp';
import SmartTrip from './pages/SmartTrip';
import SmartLanding from './pages/SmartLanding';

const routes = (
  <Route>
    <Route path="/" component={ SmartLanding } />
    <Route path="/app" component={ SmartApp }>
      <IndexRoute component={ SmartTrip } />
    </Route>
  </Route>
);

export default routes;
