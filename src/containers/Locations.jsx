import React from 'react';

import LocationContainer from '../components/LocationContainer';

class Locations extends React.Component {
  render() {
    return (
      <LocationContainer
        className="LocationContainer"
        locations={this.props.locations}
        onRemove={this.props.removeLocation}
        handleSubmit={this.props.addLocation}
        autocompleteOptions={this.props.autocompleteOptions}
        fetchSuggestions={this.props.fetchSuggestions}
        setMapCenter={this.props.setMapCenter}
      />
    );
  }
}

Locations.propTypes = {
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
  userDetails: React.PropTypes.object,
  geolocation: React.PropTypes.object,
};

export default Locations;
