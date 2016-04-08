import { EventEmitter } from 'events';
import shortid from 'shortid';

import dispatcher from '../dispatcher';

class LocationStore extends EventEmitter {
  constructor() {
    super();

    this.locations = [
      {
        name: 'Home',
        address: '420 Main Street',
      },
    ];
  }

  addLocation(name, address) {
    this.locations.push({ name, address, id: shortid.generate() });

    this.emit('change');
  }

  getAll() {
    return this.locations;
  }

  handleActions(action) {
    switch (action.type) {
      case 'ADD_LOCATION':
        this.addLocation(action.name, action.address);
        break;
      case 'REMOVE_LOCATION':
        // Remove location here.
        break;
      default:
    }
  }
}

const locationStore = new LocationStore;
dispatcher.register(locationStore.handleActions.bind(locationStore));

export default locationStore;
