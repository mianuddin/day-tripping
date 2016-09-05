import React from 'react';
import Paper from 'material-ui/Paper';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { hashHistory } from 'react-router';

import LocationList from './LocationList';

class LocationContainer extends React.Component {

  goToAdd() {
    hashHistory.push('/app/add');
  }

  render() {
    return (
      <Paper className="LocationContainer" zDepth={2} rounded={false}>
        <LocationList
          locations={this.props.locations}
          onRemove={this.props.onRemove}
        />
        <div className="FloatingActionButton">
          <FloatingActionButton
            onClick={this.goToAdd}
          >
            <ContentAdd />
          </FloatingActionButton>
        </div>
      </Paper>
    );
  }
}

LocationContainer.propTypes = {
  locations: React.PropTypes.array,
  onRemove: React.PropTypes.func,
  handleSubmit: React.PropTypes.func,
  autocompleteOptions: React.PropTypes.array,
  fetchSuggestions: React.PropTypes.func,
};

export default LocationContainer;
