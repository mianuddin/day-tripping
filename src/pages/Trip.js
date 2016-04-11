import React from 'react';

import Gmap from '../components/Gmap';
import AdaptableCardContainer from '../components/AdaptableCardContainer';
import Snackbar from 'material-ui/lib/snackbar';

import LocationStore from '../stores/LocationStore';
import * as LocationActions from '../actions/LocationActions';

class Trip extends React.Component {
  constructor(props) {
    super(props);

    this.getLocations = this.getLocations.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);

    this.state = { locations: LocationStore.getAll(), open: false, message: '' };
  }

  componentWillMount() {
    LocationStore.on(
      'change_location',
      this.getLocations
    );
    LocationStore.on(
      'fetching_geolocation',
      this.setSnackbar.bind(this, 'Requesting geolocation...')
    );
    LocationStore.on(
      'recieved_geolocation',
      this.setSnackbar.bind(this, 'Recieved geolocation.', 1500)
    );
    LocationStore.on(
      'error_geolocation',
      this.setSnackbar.bind(this, 'Could not detect your location!')
    );
    LocationStore.on(
      'fetching_latlng',
      this.setSnackbar.bind(this, 'Adding location...')
    );
    LocationStore.on(
      'added_location',
      this.setSnackbar.bind(this, 'Added location.', 1500)
    );
    LocationStore.on(
      'error_latlng',
      this.setSnackbar.bind(this, 'Could not find the coordinates of your location!')
    );
  }

  componentWillUnmount() {
    LocationStore.removeListener(
      'change_location',
      this.getLocations
    );
    LocationStore.removeListener(
      'fetching_geolocation',
      this.setSnackbar.bind(this, 'Requesting geolocation...')
    );
    LocationStore.removeListener(
      'recieved_geolocation',
      this.setSnackbar.bind(this, 'Recieved geolocation.', 1500)
    );
    LocationStore.removeListener(
      'error_geolocation',
      this.setSnackbar.bind(this, 'Could not detect your location!')
    );
    LocationStore.removeListener(
      'fetching_latlng',
      this.setSnackbar.bind(this, 'Adding location...')
    );
    LocationStore.removeListener(
      'added_location',
      this.setSnackbar.bind(this, 'Added location.', 1500)
    );
    LocationStore.removeListener(
      'error_latlng',
      this.setSnackbar.bind(this, 'Could not find the coordinates of your location!')
    );
  }

  getLocations() {
    this.setState({ locations: LocationStore.getAll() });
  }

  setSnackbar(message, timeout = false) {
    this.setState({
      message: [message],
      open: true,
    });
    if (timeout) {
      setTimeout(() => {
        this.setState({ open: false });
      }, timeout);
    }
  }

  handleRemove(id) {
    LocationActions.removeLocation(id);
  }

  handleUserInput(name, address) {
    LocationActions.newLocation(name, address);
  }

  handleRequestClose() {
    this.setState({
      open: false,
    });
  }

  render() {
    return (
      <div className="row">
        <div className="col-xs-12 col-md-6" id="GmapContainer" styles="height:420px;width:50%">
          <Gmap
            initialCenter={{ lat: 37.7749, lng: -122.4194 }}
          />
        </div>
        <div id="OtherContainer" className="col-xs-12 col-md-6">
          <AdaptableCardContainer
            locations={this.state.locations}
            onRemove={this.handleRemove}
            onUserInput={this.handleUserInput}
          />
        </div>
        <Snackbar
          open={this.state.open}
          message={this.state.message}
          autoHideDuration={3000}
          onRequestClose={this.handleRequestClose}
        />
      </div>
    );
  }
}

export default Trip;
