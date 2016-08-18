import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './pages/App';
import SmartTrip from './pages/SmartTrip';
import SmartSignIn from './pages/SmartSignIn';

const routes = (
  <Route path="/" component={ App }>
    <IndexRoute component={ SmartTrip } />
    <Route path="sign-in" component={ SmartSignIn } />
  </Route>
);

export default routes;
