import React from 'react';

import Gmap from '../components/Gmap';
import AdaptableCardContainer from '../components/AdaptableCardContainer';
import Snackbar from 'material-ui/lib/snackbar';

const Trip = props => (
  <div className="row">
    <div className="col-xs-12 col-md-6" id="GmapContainer" styles="height:420px;width:50%">
      <Gmap
        locations={props.locations}
        initialCenter={{ lat: 37.7749, lng: -122.4194 }}
        center={props.mapCenter}
        setCenter={props.setMapCenter}
      />
    </div>
    <div id="OtherContainer" className="col-xs-12 col-md-6">
      <AdaptableCardContainer
        locations={props.locations}
        onRemove={props.removeLocation}
        handleSubmit={props.addLocation}
      />
    </div>
    <Snackbar
      open={props.isSnackbarOpen}
      message={props.snackbarMessage}
      autoHideDuration={3000}
      onRequestClose={props.toggleSnackbar}
    />
  </div>
);

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
};

export default Trip;
