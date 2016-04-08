import EventEmitter from 'events';

class LocationStore extends EventEmitter {
  constructor() {
    super();
    this.locations = [
      {
        name: 'Home',
        address: '1600 Main Street',
      },
    ];
  }

  getAll() {
    return this.locations;
  }
}

const locationStore = new LocationStore;

export default LocationStore;
