import dispatcher from '../dispatcher';
import ajax from 'superagent';

export function removeLocation(id) {
  dispatcher.dispatch({
    type: 'REMOVE_LOCATION',
    id,
  });
}

export function getUserGeolocation() {
  dispatcher.dispatch({ type: 'FETCH_GEOLOCATION' });
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition((position) =>
      dispatcher.dispatch({
        type: 'RECIEVE_GEOLOCATION',
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      })
    , () => {
      dispatcher.dispatch({ type: 'RECIEVE_GEOLOCATION_ERROR' });
    });
  } else {
    dispatcher.dispatch({ type: 'RECIEVE_GEOLOCATION_ERROR' });
  }
}

export function newLocation(name, address) {
  dispatcher.dispatch({ type: 'FETCHING_LATLNG' });
  ajax.get('https://maps.googleapis.com/maps/api/geocode/json')
    .query({ address, key: 'AIzaSyBJuzpq0iVisIu1Log0SBtkye3LntrIcZI' })
    .end((error, response) => {
      if (!error && response && !(response.body.results[0] == null)) {
        dispatcher.dispatch({ type: 'SUCCESS_FETCHING_LATLNG' });
        const lat = response.body.results[0].geometry.location.lat;
        const lng = response.body.results[0].geometry.location.lng;
        dispatcher.dispatch({
          type: 'ADD_LOCATION',
          name,
          address,
          lat,
          lng,
        });
      } else {
        dispatcher.dispatch({ type: 'ERROR_FETCHING_LATLNG' });
      }
    });
}
