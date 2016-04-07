import React from 'react';

const LocationCard = props => (
  <div className="row">
    <div className="col s12 m6">
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">{props.name}</span>
          <p>{props.address}</p>
        </div>
      </div>
    </div>
  </div>
);

LocationCard.propTypes = {
  name: React.PropTypes.string,
  address: React.PropTypes.string,
};

export default LocationCard;
