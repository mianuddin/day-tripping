import dispatcher from '../dispatcher';

export function addLocation(name, address) {
  dispatcher.dispatch({
    type: 'ADD_LOCATION',
    name,
    address,
  });
}

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
    );
  } else {
    dispatcher.dispatch({ type: 'RECIEVE_GEOLOCATION_ERROR' });
  }
}
