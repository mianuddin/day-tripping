import Trip from './Trip';
import { connect } from 'react-redux';
import * as Actions from '../actions.js';

function mapStateToProps(state) {
  return {
    locations: state.getIn(['location', 'locations']).toJS(),
    isFetchingCoordinates: state.getIn(['locations', 'isFetchingCoordinates']),
    isFetchingGeolocation: state.getIn(['map', 'geolocation', 'isFetching']),
    isSnackbarOpen: state.getIn(['snackbar', 'open']),
    snackbarMessage: state.getIn(['snackbar', 'message']),
    mapCenter: state.getIn(['map', 'center']).toJS(),
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
});

const SmartTrip = connect(
  mapStateToProps,
  mapDispatchToProps
)(Trip);

export default SmartTrip;
