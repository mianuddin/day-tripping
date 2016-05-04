import React from 'react';

import Gmap from '../components/Gmap';
import AdaptableCardContainer from '../components/AdaptableCardContainer';
import Snackbar from 'material-ui/lib/snackbar';

class Trip extends React.Component {
  constructor(props) {
    super(props);

    this.getLocations = this.getLocations.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);

    this.state = { locations: [], open: false, message: '' };
  }

  getLocations() {}

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

  handleRemove(id) {}

  handleUserInput(name, address) {}

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
};

export default Trip;
