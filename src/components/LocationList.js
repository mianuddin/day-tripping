import React from 'react';

import LocationCard from './LocationCard';

const LocationList = (props) => (
  <div>
    {props.locations.map((location, index) => (
      <LocationCard location={location} key={index} onRemove={props.onRemove} />
    ))}
    {
      ! props.locations.length
      ? <div className="LocationList__empty-state"><p>You have no locations. Try adding one!</p></div>
      : null
    }
  </div>
);

LocationList.propTypes = {
  locations: React.PropTypes.array,
  onRemove: React.PropTypes.func,
};

export default LocationList;
