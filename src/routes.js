import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './pages/App';
import SmartTrip from './pages/SmartTrip';
import SmartSignIn from './pages/SmartSignIn';

const routes = (
  <Route>
    <Route component={ App }>
      <Route path="/app" component={ SmartTrip } />
    </Route>
    <Route path="/sign-in" component={ SmartSignIn } />
  </Route>
);

export default routes;
