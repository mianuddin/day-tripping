import React from 'react';
import Snackbar from 'material-ui/Snackbar';

import Gmap from '../components/Gmap';
import LocationForm from '../components/LocationForm';

class Add extends React.Component {
  render() {
    return (
      <LocationForm
        handleSubmit={this.props.addLocation}
        autocompleteOptions={this.props.autocompleteOptions}
        fetchSuggestions={this.props.fetchSuggestions}
      />
    );
  }
}

Add.propTypes = {
  locations: React.PropTypes.array,
  isFetchingCoordinates: React.PropTypes.bool,
  isFetchingGeolocation: React.PropTypes.bool,
  isSnackbarOpen: React.PropTypes.bool,
  snackbarMessage: React.PropTypes.string,
  addLocation: React.PropTypes.func,
  removeLocation: React.PropTypes.func,
  getUserGeolocation: React.PropTypes.func,
  toggleSnackbar: React.PropTypes.func,
  setSnackbarMessage: React.PropTypes.func,
  mapCenter: React.PropTypes.object,
  setMapCenter: React.PropTypes.func,
  setMapBounds: React.PropTypes.func,
  autocompleteOptions: React.PropTypes.array,
  fetchSuggestions: React.PropTypes.func,
  isDialogOpen: React.PropTypes.bool,
  toggleDialog: React.PropTypes.func,
  userDetails: React.PropTypes.object,
  geolocation: React.PropTypes.object,
};

export default Add;
