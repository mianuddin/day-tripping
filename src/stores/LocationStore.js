import { EventEmitter } from 'events';
import shortid from 'shortid';

import dispatcher from '../dispatcher';

class LocationStore extends EventEmitter {
  constructor() {
    super();

    this.locations = [
      {
        name: 'SF City Hall',
        address: '1 Dr Carlton B Goodlett Pl, San Francisco, CA 94102',
        id: shortid.generate(),
      },
    ];
  }

  addLocation(name, address) {
    this.locations.push({ name, address, id: shortid.generate() });

    this.emit('change');
  }

  removeLocation(id) {
    for (let i = 0; i < this.locations.length; i++) {
      if (this.locations[i].id === id) {
        this.locations.splice(i, 1);
        this.emit('change');
        return;
      }
    }
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
        this.removeLocation(action.id);
        break;
      default:
    }
  }
}

const locationStore = new LocationStore;
dispatcher.register(locationStore.handleActions.bind(locationStore));

export default locationStore;
