import React from 'react';

import LocationList from './LocationList';
import Paper from 'material-ui/Paper';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import LocationDialog from './LocationDialog';

const LocationContainer = props => (
  <Paper className="LocationContainer">
    <LocationList
      locations={props.locations}
      onRemove={props.onRemove}
    />
    <LocationDialog
      handleSubmit={props.handleSubmit}
      autocompleteOptions={props.autocompleteOptions}
      fetchSuggestions={props.fetchSuggestions}
      isDialogOpen={props.isDialogOpen}
      toggleDialog={props.toggleDialog}
    />
    <div className="FloatingActionButton">
      <FloatingActionButton
        onClick={props.toggleDialog}
      >
        <ContentAdd />
      </FloatingActionButton>
    </div>
  </Paper>
);

LocationContainer.propTypes = {
  locations: React.PropTypes.array,
  onRemove: React.PropTypes.func,
  handleSubmit: React.PropTypes.func,
  autocompleteOptions: React.PropTypes.array,
  fetchSuggestions: React.PropTypes.func,
  isDialogOpen: React.PropTypes.bool,
  toggleDialog: React.PropTypes.func,
};

export default LocationContainer;
