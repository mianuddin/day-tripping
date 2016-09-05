import React from 'react';
import Snackbar from 'material-ui/Snackbar';

import Gmap from '../components/Gmap';
import LocationContainer from '../components/LocationContainer';

class Add extends React.Component {
  componentWillMount() {
    this.props.getUserGeolocation();
  }

  render() {
    return (
      <div className="Trip">
        <div className="GmapContainer">
          <Gmap
            locations={this.props.locations}
            initialCenter={{ lat: 37.7749, lng: -122.4194 }}
            center={this.props.mapCenter}
            setCenter={this.props.setMapCenter}
            setBounds={this.props.setMapBounds}
            geolocation={this.props.geolocation}
          />
        </div>
        <LocationContainer
          className="LocationContainer"
          locations={this.props.locations}
          onRemove={this.props.removeLocation}
          handleSubmit={this.props.addLocation}
          autocompleteOptions={this.props.autocompleteOptions}
          fetchSuggestions={this.props.fetchSuggestions}
          isDialogOpen={this.props.isDialogOpen}
          toggleDialog={this.props.toggleDialog}
        />
        <Snackbar
          open={this.props.isSnackbarOpen}
          message={this.props.snackbarMessage}
          autoHideDuration={3000}
          onRequestClose={this.props.toggleSnackbar}
        />
      </div>
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
