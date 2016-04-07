import React from 'react';

import LocationCard from './LocationCard';

class LocationContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <h3>Locations</h3>
        {this.props.locations.map((location, index) => (
          <LocationCard name={location.name} address={location.address} key={index} />
        ))}
      </div>
    );
  }
}

LocationContainer.propTypes = {
  locations: React.PropTypes.array,
};

export default LocationContainer;
