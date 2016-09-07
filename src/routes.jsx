import React from 'react';
import { Route, IndexRoute } from 'react-router';

import SmartApp from './pages/SmartApp';
import SmartLocations from './pages/SmartLocations';
import SmartAdd from './pages/SmartAdd';
import SmartLanding from './pages/SmartLanding';
import SmartTrip from './pages/SmartTrip';
import Theme from './pages/Theme';

const routes = (
  <Route component={Theme} >
    <Route path="/" component={SmartLanding} />
    <Route path="/app" component={SmartApp}>
      <Route component={SmartTrip}>
        <IndexRoute component={SmartLocations} />
        <Route path="add" component={SmartAdd} />
      </Route>
    </Route>
  </Route>
);

export default routes;
