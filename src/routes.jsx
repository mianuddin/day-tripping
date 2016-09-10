import React from 'react';
import { Route, IndexRoute } from 'react-router';

import SmartApp from './containers/SmartApp';
import SmartLocations from './containers/SmartLocations';
import SmartAdd from './containers/SmartAdd';
import SmartLanding from './containers/SmartLanding';
import SmartTrip from './containers/SmartTrip';
import Theme from './containers/Theme';

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
