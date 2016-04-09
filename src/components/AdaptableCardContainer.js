import React from 'react';

import LocationContainer from './LocationContainer';
import Form from './Form';

const AdaptableCardContainer = props => (
  <div id="AdaptableCardContainer">
    <h2>Locations</h2>
    <LocationContainer locations={props.locations} onRemove={props.onRemove} />
    <Form onUserInput={props.onUserInput} />
  </div>
);

AdaptableCardContainer.propTypes = {
  locations: React.PropTypes.array,
  onRemove: React.PropTypes.func,
  onUserInput: React.PropTypes.func,
};

export default AdaptableCardContainer;
