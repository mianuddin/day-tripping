import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './pages/App';
import SmartTrip from './pages/SmartTrip';

const routes = (
    <Route path="/" component={ App }>
      <IndexRoute component={ SmartTrip } />
    </Route>
);

export default routes;
