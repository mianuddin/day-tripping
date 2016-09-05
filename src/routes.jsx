import React from 'react';
import { Route, IndexRoute } from 'react-router';

import SmartApp from './pages/SmartApp';
import SmartTrip from './pages/SmartTrip';
import SmartAdd from './pages/SmartAdd';
import SmartLanding from './pages/SmartLanding';
import Theme from './pages/Theme';

const routes = (
  <Route component={Theme} >
    <Route path="/" component={SmartLanding} />
    <Route path="/app" component={SmartApp}>
      <IndexRoute component={SmartTrip} />
      <Route path="add" component={SmartAdd} />
    </Route>
  </Route>
);

export default routes;
