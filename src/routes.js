import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './pages/App';
import SmartTrip from './pages/SmartTrip';
import SignIn from './pages/SignIn';

const routes = (
  <Route path="/" component={ App }>
    <IndexRoute component={ SmartTrip } />
    <Route path="sign-in" component={ SignIn } />
  </Route>
);

export default routes;
