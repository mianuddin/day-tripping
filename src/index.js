import React from 'react';
import ReactDOM from 'react-dom';
import { Router, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { fromJS } from 'immutable';
import { combineReducers } from 'redux-immutable';
import * as reducers from './reducers';
import routes from './routes';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { listenToAuth } from './actions';
import { responsiveStateReducer, responsiveStoreEnhancer } from 'redux-responsive';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const initialState = fromJS({
  location: {
    locations: [],
    isFetchingCoordinates: false,
  },
  map: {
    center: {
      lat: 37.7749,
      lng: -122.4194,
    },
    bounds: {},
    geolocation: {
      isFetching: false,
    },
    autocompleteOptions: [],
  },
  app: {
    snackbar: {
      open: false,
      message: '',
    },
  },
  dialog: {
    open: false,
  },
  auth: {
    currently: 'ANONYMOUS',
    username: null,
    uid: null,
    listId: null,
  },
});

const store = createStore(
  combineReducers({
    ...reducers,
    browser: responsiveStateReducer,
  }),
  initialState,
  compose(
    responsiveStoreEnhancer,
    applyMiddleware(ReduxThunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

ReactDOM.render(
  <Provider store={store}>
    <Router history={appHistory} onUpdate={() => window.scrollTo(0, 0)}>
      {routes}
    </Router>
  </Provider>,
  document.getElementById('app')
);

setTimeout(() => {
  store.dispatch(listenToAuth());
});
