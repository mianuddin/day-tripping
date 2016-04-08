import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './pages/App';
import Trip from './pages/Trip';

const routes = (
    <Route path="/" component={ App }>
      <IndexRoute component={ Trip } />
    </Route>
);

export default routes;
