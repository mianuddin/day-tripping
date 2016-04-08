import React from 'react';

import Gmap from '../components/Gmap';
import AdaptableCardContainer from '../components/AdaptableCardContainer';

import LocationStore from '../stores/LocationStore';
import * as LocationActions from '../actions/LocationActions';

class Trip extends React.Component {
  constructor(props) {
    super(props);

    this.handleRemove = this.handleRemove.bind(this);
    this.handleUserInput = this.handleUserInput.bind(this);

    this.state = { locations: LocationStore.getAll() };
  }

  componentWillMount() {
    LocationStore.on('change_location', () => {
      this.setState({ locations: LocationStore.getAll() });
    });
  }

  handleRemove(id) {
    LocationActions.removeLocation(id);
  }

  handleUserInput(name, address) {
    LocationActions.addLocation(name, address);
  }

  render() {
    return (
      <div className="row">
        <div className="col-xs-12 col-md-6" styles="height:420px;width:50%">
          <Gmap
            initialCenter={{ lat: 37.7749, lng: -122.4194 }}
            locations={this.state.locations}
          />
        </div>
        <div className="col-xs-12 col-md-6">
          <AdaptableCardContainer
            locations={this.state.locations}
            onRemove={this.handleRemove}
            onUserInput={this.handleUserInput}
          />
        </div>
      </div>
    );
  }
}

export default Trip;
