import React from 'react';

import LocationStore from '../stores/LocationStore';
import * as LocationActions from '../actions/LocationActions';
import LocationContainer from './LocationContainer';
import Form from './Form';

class AdaptableCardContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handleUserInput = this.handleUserInput.bind(this);

    this.state = { locations: LocationStore.getAll() };
  }

  componentWillMount() {
    LocationStore.on('change', () => {
      this.setState({ locations: LocationStore.getAll() });
    });
  }

  handleUserInput(name, address) {
    LocationActions.addLocation(name, address);
  }

  render() {
    return (
      <div>
        <LocationContainer locations={this.state.locations} />
        <Form onUserInput={this.handleUserInput} />
      </div>
    );
  }
}

export default AdaptableCardContainer;
