import React from 'react';

import Gmap from '../components/Gmap';
import AdaptableCardContainer from '../components/AdaptableCardContainer';
import Snackbar from 'material-ui/lib/snackbar';

class Trip extends React.Component {
  componentWillMount() {
    this.props.getUserGeolocation();
  }

  render() {
    return (
      <div className="row">
        <div className="col-xs-12 col-md-6" id="GmapContainer" styles="height:420px;width:50%">
          <Gmap
            locations={this.props.locations}
            initialCenter={{ lat: 37.7749, lng: -122.4194 }}
            center={this.props.mapCenter}
            setCenter={this.props.setMapCenter}
          />
        </div>
        <div id="OtherContainer" className="col-xs-12 col-md-6">
          <AdaptableCardContainer
            locations={this.props.locations}
            onRemove={this.props.removeLocation}
            handleSubmit={this.props.addLocation}
            autocompleteOptions={this.props.autocompleteOptions}
            fetchSuggestions={this.props.fetchSuggestions}
          />
        </div>
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
  autocompleteOptions: React.PropTypes.array,
  fetchSuggestions: React.PropTypes.func,
};

export default Trip;
