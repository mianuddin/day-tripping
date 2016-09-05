import { connect } from 'react-redux';

import Trip from './Trip';
import * as Actions from '../actions.js';

function mapStateToProps(state) {
  return {
    locations: state.getIn(['location', 'locations']).toJS(),
    isFetchingCoordinates: state.getIn(['locations', 'isFetchingCoordinates']),
    isFetchingGeolocation: state.getIn(['map', 'geolocation', 'isFetching']),
    geolocation: state.getIn(['map', 'geolocation']).toJS(),
    isSnackbarOpen: state.getIn(['app', 'snackbar', 'open']),
    snackbarMessage: state.getIn(['app', 'snackbar', 'message']),
    mapCenter: state.getIn(['map', 'center']).toJS(),
    autocompleteOptions: state.getIn(['map', 'autocompleteOptions']).toJS(),
    isDialogOpen: state.getIn(['dialog', 'open']),
    userDetails: state.get('user').toJS(),
  };
}

const mapDispatchToProps = (dispatch) => ({
  addLocation: (name, address) => {
    dispatch(Actions.addLocation(name, address));
  },
  removeLocation: (id) => {
    dispatch(Actions.removeLocation(id));
  },
  getUserGeolocation: () => {
    dispatch(Actions.getUserGeolocation());
  },
  toggleSnackbar: () => {
    dispatch(Actions.toggleSnackbar());
  },
  setSnackbarMessage: (message) => {
    dispatch(Actions.setSnackbarMessage(message));
  },
  setMapCenter: (center) => {
    dispatch(Actions.setMapCenter(center));
  },
  setMapBounds: (bounds) => {
    dispatch(Actions.setMapBounds(bounds));
  },
  fetchSuggestions: (query) => {
    dispatch(Actions.getSuggestions(query));
  },
  toggleDialog: () => {
    dispatch(Actions.toggleDialog());
  },
});

const SmartTrip = connect(
  mapStateToProps,
  mapDispatchToProps
)(Trip);

export default SmartTrip;
