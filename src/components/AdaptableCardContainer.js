import React from 'react';

import LocationContainer from './LocationContainer';
import Form from './Form';

import '../styles/partials/_AdaptableCardContainer';

const AdaptableCardContainer = props => (
  <div id="AdaptableCardContainer">
    <h2>Locations</h2>
    <LocationContainer locations={props.locations} onRemove={props.onRemove} />
    <Form />
  </div>
);

AdaptableCardContainer.propTypes = {
  locations: React.PropTypes.array,
  onRemove: React.PropTypes.func,
};

export default AdaptableCardContainer;
