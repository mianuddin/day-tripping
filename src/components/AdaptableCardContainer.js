import React from 'react';

import LocationContainer from './LocationContainer';
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import ContentAdd from 'material-ui/lib/svg-icons/content/add';
// import Form from './Form';

import '../styles/partials/_AdaptableCardContainer';

const AdaptableCardContainer = props => (
  <div className="AdaptableCardContainer">
    <LocationContainer
      locations={props.locations}
      onRemove={props.onRemove}
    />
    <div className="FloatingActionButton">
      <FloatingActionButton>
        <ContentAdd />
      </FloatingActionButton>
    </div>
  </div>
);

// <Form
//   handleSubmit={props.handleSubmit}
//   autocompleteOptions={props.autocompleteOptions}
//   fetchSuggestions={props.fetchSuggestions}
// />

AdaptableCardContainer.propTypes = {
  locations: React.PropTypes.array,
  onRemove: React.PropTypes.func,
  handleSubmit: React.PropTypes.func,
  autocompleteOptions: React.PropTypes.array,
  fetchSuggestions: React.PropTypes.func,
};

export default AdaptableCardContainer;
