import React from 'react';

import LocationCard from './LocationCard';

const LocationContainer = props => (
  <div>
    <h3>Locations</h3>
    {props.locations.map((location, index) => (
      <LocationCard location={location} key={index} onRemove={props.onRemove} />
    ))}
  </div>
);

LocationContainer.propTypes = {
  locations: React.PropTypes.array,
  onRemove: React.PropTypes.func,
};

export default LocationContainer;
