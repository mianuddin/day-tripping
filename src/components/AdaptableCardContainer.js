import React from 'react';

import LocationContainer from './LocationContainer';
import Form from './Form';

class AdaptableCardContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handleUserInput = this.handleUserInput.bind(this);

    this.state = { locations: [] };
  }

  handleUserInput(name, address) {
    const locationArray = this.state.locations;
    locationArray.push({ name, address });

    this.setState({ locations: locationArray });
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
