import React from 'react';
import Snackbar from 'material-ui/Snackbar';

import Gmap from '../components/Gmap';

class Trip extends React.Component {
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

        {React.cloneElement(this.props.children, { key: this.props.location.pathname })}

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

Trip.propTypes = {
  children: React.PropTypes.node,
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
  location: React.PropTypes.node,
};

export default Trip;
