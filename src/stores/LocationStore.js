import { EventEmitter } from 'events';
import shortid from 'shortid';

import dispatcher from '../dispatcher';

class LocationStore extends EventEmitter {
  constructor() {
    super();

    this.locations = [];

    this.geolocation = { lat: 37.7749, lng: -122.4194 };
  }

  addLocation(name, address, lat, lng) {
    this.locations.push({ name, address, id: shortid.generate(), lat, lng });

    this.emit('change_location');
  }

  removeLocation(id) {
    for (let i = 0; i < this.locations.length; i++) {
      if (this.locations[i].id === id) {
        this.locations.splice(i, 1);
        this.emit('change_location');
        return;
      }
    }
  }

  updateGeolocation(lat, lng) {
    this.geolocation = { lat, lng };

    this.emit('change_geolocation');
  }

  getAll() {
    return this.locations;
  }

  getGeolocation() {
    return this.geolocation;
  }

  handleActions(action) {
    switch (action.type) {
      case 'ADD_LOCATION':
        this.addLocation(action.name, action.address, action.lat, action.lng);
        this.emit('added_location');
        break;
      case 'REMOVE_LOCATION':
        this.removeLocation(action.id);
        break;
      case 'RECIEVE_GEOLOCATION':
        this.emit('recieved_geolocation');
        this.updateGeolocation(action.lat, action.lng);
        break;
      case 'FETCH_GEOLOCATION':
        this.emit('fetching_geolocation');
        break;
      case 'RECIEVE_GEOLOCATION_ERROR':
        this.emit('error_geolocation');
        break;
      case 'FETCHING_LATLNG':
        this.emit('fetching_latlng');
        break;
      case 'ERROR_FETCHING_LATLNG':
        this.emit('error_latlng');
        break;
      default:
    }
  }
}

const locationStore = new LocationStore;
dispatcher.register(locationStore.handleActions.bind(locationStore));

export default locationStore;
