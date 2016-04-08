import React from 'react';

const LocationCard = props => (
  <div className="row">
    <div className="col s12">
      <div className="card blue-grey">
        <div className="card-content white-text">
          <span className="card-title">{props.location.name}</span>
          <p>{props.location.address}</p>
        </div>
        <div className="card-action">
          <a href="#" className="right-align teal-text text-accent-3" onClick={props.onRemove.bind(this, props.location.id)}>Remove</a>
        </div>
      </div>
    </div>
  </div>
);

LocationCard.propTypes = {
  location: React.PropTypes.object,
  onRemove: React.PropTypes.func,
};

export default LocationCard;
