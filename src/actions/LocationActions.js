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
