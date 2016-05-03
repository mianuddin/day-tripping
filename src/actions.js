import ajax from 'superagent';

export function fetchLocationCoordinates() {
  return {
    type: 'FETCHING_LATLNG',
  };
}

export function recieveLocationCoordinates() {
  return {
    type: 'RECIEVE_LATLNG_SUCCESS',
  };
}

export function recieveLocationCoordinatesError(error) {
  return {
    type: 'RECIEVE_LATLNG_ERROR',
    error,
  };
}

export function insertLocationToState(name, address, lat, lng) {
  return {
    type: 'ADD_LOCATION',
    name,
    address,
    lat,
    lng,
  };
}

export function addLocation(name, address) {
  return (dispatch) => {
    fetchLocationCoordinates();
    return ajax.get('https://maps.googleapis.com/maps/api/geocode/json')
      .query({ address, key: 'AIzaSyBJuzpq0iVisIu1Log0SBtkye3LntrIcZI' })
      .end((error, response) => {
        if (!error && response && !(response.body.results[0] == null)) {
          dispatch(recieveLocationCoordinates());
          const lat = response.body.results[0].geometry.location.lat;
          const lng = response.body.results[0].geometry.location.lng;
          dispatch(insertLocationToState(name, address, lat, lng));
        } else {
          dispatch(recieveLocationCoordinatesError(error));
        }
      });
  };
}

export function removeLocation(id) {
  return {
    type: 'REMOVE_LOCATION',
    id,
  };
}

export function fetchUserGeolocation() {
  return {
    type: 'FETCH_GEOLOCATION',
  };
}

export function recieveUserGeolocation(lat, lng) {
  return {
    type: 'RECIEVE_GEOLOCATION_SUCCESS',
    lat,
    lng,
  };
}

export function recieveUserGeolocationError(error) {
  return {
    type: 'RECIEVE_GEOLOCATION_ERROR',
    error,
  };
}

export function getUserGeolocation() {
  return (dispatch) => {
    dispatch(fetchUserGeolocation());
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        dispatch(fetchUserGeolocation(latitude, longitude));
      }, () => {
        dispatch(recieveUserGeolocationError());
      });
    } else {
      dispatch(recieveUserGeolocationError());
    }
  };
}

export function toggleSnackbar() {
  return {
    type: 'TOGGLE_SNACKBAR',
  };
}

export function setSnackbarMessage(message) {
  return {
    type: 'SET_SNACKBAR_MESSAGE',
    message,
  };
}