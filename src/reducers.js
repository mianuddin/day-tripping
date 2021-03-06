import { fromJS } from 'immutable';

export function location(state, action) {
  switch (action.type) {
    case 'FETCHING_LATLNG':
      return state.set('isFetchingCoordinates', true);
    case 'RECIEVE_LATLNG_SUCCESS':
    case 'RECIEVE_LATLNG_ERROR':
      return state.set('isFetchingCoordinates', false);
    case 'ADD_LOCATION':
      return state.set('locations', state.get('locations').push(fromJS({
        name: action.name,
        address: action.address,
        id: action.id,
        lat: action.lat,
        lng: action.lng,
      })));
    case 'REMOVE_LOCATION':
      for (let i = 0; i < state.get('locations').size; i++) {
        if (state.get('locations').toJS()[i].id === action.id) {
          return state.set('locations', state.get('locations').splice(i, 1));
        }
      }
      return state;
    case 'CLEAR_LOCATIONS':
      return state.set('locations', fromJS([]));
    default:
      return state;
  }
}

export function map(state, action) {
  switch (action.type) {
    case 'SET_MAP_CENTER':
      return state.set('center', fromJS(action.center));
    case 'SET_MAP_BOUNDS':
      return state.set('bounds', action.bounds);
    case 'FETCH_GEOLOCATION':
      return state.setIn(['geolocation', 'isFetching'], true);
    case 'RECIEVE_GEOLOCATION_SUCCESS':
      return state.merge(fromJS({
        geolocation: {
          isFetching: false,
          lat: action.lat,
          lng: action.lng,
        },
        center: {
          lat: action.lat,
          lng: action.lng,
        },
      }));
    case 'RECIEVE_SUGGESTIONS_SUCCESS':
      return state.set('autocompleteOptions', fromJS(action.suggestions));
    case 'RECIEVE_SUGGESTIONS_ERROR':
      return state.set('autocompleteOptions', fromJS([]));
    default:
      return state;
  }
}

export function app(state, action) {
  switch (action.type) {
    case 'TOGGLE_SNACKBAR':
      return state.setIn(['snackbar', 'open'], !state.getIn(['snackbar', 'open']));
    case 'SET_SNACKBAR_MESSAGE':
      return state.setIn(['snackbar', 'message'], action.message).setIn(['snackbar', 'open'], true);
    case 'TOGGLE_MOBILEDRAWER':
      return state.setIn(['mobileDrawer', 'open'], !state.getIn(['mobileDrawer', 'open']));
    case 'OPEN_APPBARPOPOVER':
      return state.setIn(['appBarPopover', 'open'], true)
        .setIn(['appBarPopover', 'anchorEl'], action.element);
    case 'CLOSE_APPBARPOPOVER':
      return state.setIn(['appBarPopover', 'open'], false);
    default:
      return state;
  }
}

export function dialog(state, action) {
  switch (action.type) {
    case 'TOGGLE_DIALOG':
      return state.set('open', !state.get('open'));
    default:
      return state;
  }
}

export function user(state, action) {
  switch (action.type) {
    case 'ATTEMPTING_LOGIN':
      return state.merge(fromJS({
        currently: 'AWAITING_AUTH_RESPONSE',
        username: 'guest',
        uid: 'null',
        photoURL: 'null',
        listId: 'null',
      }));
    case 'LOGOUT':
      return state.merge(fromJS({
        currently: 'ANONYMOUS',
        username: 'guest',
        uid: 'null',
        photoURL: 'null',
        listId: 'null',
      }));
    case 'LOGIN_USER':
      return state.merge(fromJS({
        currently: 'LOGGED_IN',
        username: action.username,
        uid: action.uid,
        photoURL: action.photoURL,
        listId: action.listId,
      }));
    default:
      return state;
  }
}
