import React from 'react';

class LocationCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="row">
        <div className="col s12 m6">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">{this.props.name}</span>
              <p>{this.props.address}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

LocationCard.propTypes = {
  name: React.PropTypes.string,
  address: React.PropTypes.string,
};

export default LocationCard;
