import React from 'react';

import LocationCard from './LocationCard';

const LocationContainer = props => (
  <div>
    {props.locations.map((location, index) => (
      <LocationCard location={location} key={index} onRemove={props.onRemove} />
    ))}
    {!props.locations.length ? <p>You have no locations. Try adding one!</p> : null}
  </div>
);

LocationContainer.propTypes = {
  locations: React.PropTypes.array,
  onRemove: React.PropTypes.func,
};

export default LocationContainer;
