import React from 'react';

import LocationCard from './LocationCard';

const LocationContainer = props => (
  <div>
    <h3>Locations</h3>
    {props.locations.map((location, index) => (
      <LocationCard name={location.name} address={location.address} key={index} />
    ))}
  </div>
);

LocationContainer.propTypes = {
  locations: React.PropTypes.array,
};

export default LocationContainer;
