import { fromJS } from 'immutable';
import shortid from 'shortid';

export function location(state, action) {
  switch (action.type) {
    case 'FETCHING_LATLNG':
      return state.set('fetchingCoordinates', true);
    case 'RECIEVE_LATLNG_SUCCESS':
    case 'RECIEVE_LATLNG_ERROR':
      return state.set('fetchingCoordinates', false);
    case 'ADD_LOCATION':
      return state.locations.push(fromJS({
        name: action.name,
        address: action.address,
        id: shortid.generate(),
        lat: action.lat,
        lng: action.lng,
      }));
    case 'REMOVE_LOCATION':
      for (let i = 0; i < state.locations.size; i++) {
        if (state.locations[i].get('id') === action.id) {
          return state.locations.splice(i, 1);
        }
      }
      return state;
    default:
      return state;
  }
}

export function map(state, action) {
  switch (action.type) {
    case 'FETCH_GEOLOCATION':
      return state.setIn(['geolocation', 'fetching'], true);
    case 'RECIEVE_GEOLOCATION_SUCCESS':
      return state.merge(fromJS({
        geolocation: {
          fetching: false,
          center: {
            lat: action.lat,
            lng: action.lng,
          },
        },
        center: {
          lat: action.lat,
          lng: action.lng,
        },
      }));
    case 'RECIEVE_GEOLOCATION_ERROR':
    default:
      return state;
  }
}

export function snackbar(state, action) {
  switch (action.type) {
    case 'TOGGLE_SNACKBAR':
      return state.set('open', !state.get('open'));
    case 'SET_SNACKBAR_MESSAGE':
      return state.set('message', action.message);
    default:
      return state;
  }
}
