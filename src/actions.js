/* global google */
import ajax from 'superagent';
import { hashHistory } from 'react-router';
import firebase from 'firebase';
import shortid from 'shortid';

const config = {
  apiKey: 'AIzaSyChHIxDfFXyI5OdNe1xJGdoWpLAx1_4_ZU',
  authDomain: 'day-tripping.firebaseapp.com',
  databaseURL: 'https://day-tripping.firebaseio.com',
  storageBucket: 'day-tripping.appspot.com',
};

firebase.initializeApp(config);

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

function insertLocationToState(name, address, lat, lng, id) {
  return {
    type: 'ADD_LOCATION',
    name,
    address,
    lat,
    lng,
    id,
  };
}

export function addLocation(location) {
  return (dispatch, getState) => {
    const { map, user } = getState().toJS();
    const bounds = map.bounds;
    const listId = user.listId;
    const locationId = shortid.generate();
    const address = location.address;
    const name = location.name;

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
          firebase.database().ref(`/list/${listId}`).push({ name, address, lat, lng, locationId });
          dispatch(this.setSnackbarMessage('Added location!'));
        } else {
          dispatch(this.setSnackbarMessage('Couldn\'t find the coordinates of your location!'));
          dispatch(recieveLocationCoordinatesError(error));
        }
      });
  };
}

export function removeLocation(id) {
  return (dispatch, getState) => {
    const { user } = getState().toJS();
    const listId = user.listId;

    firebase.database().ref(`/list/${listId}`).once('value').then((snapshot) => {
      snapshot.forEach((childSnapshot) => {
        if (childSnapshot.val().locationId === id) {
          firebase.database().ref(`/list/${listId}`).child(childSnapshot.key).remove()
          .then(() => {
            dispatch(this.setSnackbarMessage(`Location ${id} removed!`));
          });
        }
      });
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
    dispatch(this.setSnackbarMessage('Searching for your location...'));
    dispatch(fetchUserGeolocation());

    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        dispatch(this.setSnackbarMessage('Found your location!'));
        dispatch(recieveUserGeolocation(latitude, longitude));
      }, () => {
        dispatch(this.setSnackbarMessage('Couldn\'t detect your location!'));
        dispatch(recieveUserGeolocationError());
      });
    } else {
      dispatch(this.setSnackbarMessage('Couldn\'t detect your location!'));
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
  const suggestionObject = suggestions.map((suggestion) => ({
    name: suggestion.structured_formatting.main_text,
    address: suggestion.description,
    placeId: suggestion.place_id,
  }));

  return {
    type: 'RECIEVE_SUGGESTIONS_SUCCESS',
    suggestions: suggestionObject,
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

export function toggleMobileDrawer() {
  return {
    type: 'TOGGLE_MOBILEDRAWER',
  };
}

export function openAppBarPopover(element) {
  return {
    type: 'OPEN_APPBARPOPOVER',
    element,
  };
}

export function closeAppBarPopover() {
  return {
    type: 'CLOSE_APPBARPOPOVER',
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

export function listenToAuth() {
  return (dispatch) => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const userId = user.uid;
        let listId;

        firebase.database().ref(`/users/${userId}`).once('value').then((snapshot) => {
          if (snapshot.val() === null) {
            listId = shortid.generate();
            firebase.database().ref(`/users/${userId}`).set({
              displayName: firebase.auth().currentUser.displayName,
              visitCount: 0,
              listId,
            });
          } else {
            listId = snapshot.val().listId;
            firebase.database().ref(`/users/${userId}`).update({
              visitCount: snapshot.val().visitCount + 1,
            });
          }

          dispatch({
            type: 'LOGIN_USER',
            username: firebase.auth().currentUser.displayName,
            uid: firebase.auth().currentUser.uid,
            photoURL: firebase.auth().currentUser.photoURL,
            listId,
          });

          firebase.database().ref(`/list/${listId}`).on('child_added', (data) => {
            const location = data.val();
            dispatch(insertLocationToState(location.name, location.address, location.lat, location.lng, location.locationId)); // eslint-disable-line max-len
          });

          firebase.database().ref(`/list/${listId}`).on('child_removed', (data) => {
            const locationId = data.val().locationId;
            dispatch(dispatch({ type: 'REMOVE_LOCATION', id: locationId }));
          });

          hashHistory.push('/app');
        });
      } else {
        hashHistory.push('/');
        if (user.currently !== 'ANONYMOUS') { // log out if not already logged out
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
      dispatch({ type: 'CLEAR_LOCATIONS' });
    });
  };
}

export function logoutUser() {
  return (dispatch, getState) => {
    const { user } = getState().toJS();

    dispatch({ type: 'LOGOUT' });
    dispatch({ type: 'CLEAR_LOCATIONS' });
    firebase.database().ref(`/list/${user.listId}`).off();
    firebase.auth().signOut();
  };
}
