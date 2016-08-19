/* global google */
import ajax from 'superagent';

function fetchLocationCoordinates(address) {
  return {
    type: 'FETCHING_LATLNG',
    address,
  };
}

function recieveLocationCoordinates() {
  return {
    type: 'RECIEVE_LATLNG_SUCCESS',
  };
}

function recieveLocationCoordinatesError(error) {
  return {
    type: 'RECIEVE_LATLNG_ERROR',
    error,
  };
}

function insertLocationToState(name, address, lat, lng) {
  return {
    type: 'ADD_LOCATION',
    name,
    address,
    lat,
    lng,
  };
}

export function addLocation(name, address) {
  return (dispatch, getState) => {
    const { map } = getState();
    const bounds = map.bounds;

    dispatch(this.setSnackbarMessage('Adding location...'));
    dispatch(fetchLocationCoordinates(address));

    return ajax.get('https://maps.googleapis.com/maps/api/geocode/json')
      .query({ address, bounds, key: 'AIzaSyCVxP_vXzu6fM-5h7DmKU5ht1uBuU78FvQ' })
      .end((error, response) => {
        if (!error
          && response
          && !(response.body.results[0] == null)) { // eslint-disable-line eqeqeq
          dispatch(recieveLocationCoordinates());
          const lat = response.body.results[0].geometry.location.lat;
          const lng = response.body.results[0].geometry.location.lng;
          dispatch(this.setSnackbarMessage('Added location!'));
          dispatch(insertLocationToState(name, address, lat, lng));
        } else {
          dispatch(this.setSnackbarMessage('Could not find the coordinates of your location!'));
          dispatch(recieveLocationCoordinatesError(error));
        }
      });
  };
}

export function removeLocation(id) {
  return (dispatch) => {
    dispatch(this.setSnackbarMessage(`Location ${id} removed!`));
    dispatch({
      type: 'REMOVE_LOCATION',
      id,
    });
  };
}

function fetchUserGeolocation() {
  return {
    type: 'FETCH_GEOLOCATION',
  };
}

function recieveUserGeolocation(lat, lng) {
  return {
    type: 'RECIEVE_GEOLOCATION_SUCCESS',
    lat,
    lng,
  };
}

function recieveUserGeolocationError(error) {
  return {
    type: 'RECIEVE_GEOLOCATION_ERROR',
    error,
  };
}

export function getUserGeolocation() {
  return (dispatch) => {
    dispatch(this.setSnackbarMessage('Requesting geolocation...'));
    dispatch(fetchUserGeolocation());
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        dispatch(this.setSnackbarMessage('Recieved geolocation.'));
        dispatch(recieveUserGeolocation(latitude, longitude));
      }, () => {
        dispatch(this.setSnackbarMessage('Could not detect your location!'));
        dispatch(recieveUserGeolocationError());
      });
    } else {
      dispatch(this.setSnackbarMessage('Could not detect your location!'));
      dispatch(recieveUserGeolocationError());
    }
  };
}


function fetchSuggestions(query) {
  return {
    type: 'FETCHING_SUGGESTIONS',
    query,
  };
}

function recieveSuggestions(suggestions) {
  const suggestionTextOnly = suggestions.map((suggestion) => (
    suggestion.description
  ));

  return {
    type: 'RECIEVE_SUGGESTIONS_SUCCESS',
    suggestions: suggestionTextOnly,
  };
}

function recieveSuggestionsError(error) {
  return {
    type: 'RECIEVE_SUGGESTIONS_ERROR',
    error,
  };
}

export function getSuggestions(query) {
  return (dispatch, getState) => {
    const { map } = getState();

    dispatch(fetchSuggestions(query));

    const input = query !== '' ? query : ' ';

    const service = new google.maps.places.AutocompleteService();
    const request = {
      input,
      bounds: map.bounds,
    };
    service.getQueryPredictions(request, (predictions, status) => {
      if (status !== google.maps.places.PlacesServiceStatus.OK) {
        dispatch(recieveSuggestionsError(status));
        return;
      }

      dispatch(recieveSuggestions(predictions));
    });
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

export function setMapCenter(center) {
  return {
    type: 'SET_MAP_CENTER',
    center,
  };
}

export function setMapBounds(bounds) {
  return {
    type: 'SET_MAP_BOUNDS',
    bounds,
  };
}

export function toggleDialog() {
  return {
    type: 'TOGGLE_DIALOG',
  };
}

import { hashHistory } from 'react-router';

import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyChHIxDfFXyI5OdNe1xJGdoWpLAx1_4_ZU',
  authDomain: 'day-tripping.firebaseapp.com',
  databaseURL: 'https://day-tripping.firebaseio.com',
  storageBucket: 'day-tripping.appspot.com',
};

firebase.initializeApp(config);

export function startListeningToAuth() {
  return (dispatch, getState) => {
    const { auth } = getState();
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        hashHistory.push('/app');
        dispatch({
          type: 'LOGIN_USER',
          username: user.displayName,
          uid: user.uid,
        });
      } else {
        if (auth.currently !== 'ANONYMOUS') { // log out if not already logged out
          dispatch({ type: 'LOGOUT' });
        }
      }
    });
  };
}

export function attemptLogin() {
  return (dispatch) => {
    dispatch({ type: 'ATTEMPTING_LOGIN' });
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
    .catch((error) => {
      dispatch({ type: 'DISPLAY_ERROR', error: `Login failed: ${error.message}` });
      dispatch({ type: 'LOGOUT' });
    });
  };
}

export function logoutUser() {
  return (dispatch) => {
    dispatch({ type: 'LOGOUT' });
    firebase.auth().signOut();
  };
}
