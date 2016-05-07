import React from 'react';
import AutoComplete from 'material-ui/lib/auto-complete';
import { HOC } from 'formsy-react';

class FormsyAutocomplete extends React.Component {

  handleChange(value) { this.props.setValue(value); }

  render() {
    return (
      <AutoComplete
        filter={AutoComplete.noFilter}
        triggerUpdateOnFocus
        dataSource={this.props.options}
        onNewRequest={this.handleChange}
        onUpdateInput={this.props.fetchSuggestions}
        floatingLabelText={this.props.floatingLabelText}
      />
    );
  }
}

FormsyAutocomplete.propTypes = {
  options: React.PropTypes.array.isRequired,
  setValue: React.PropTypes.func.isRequired,
  fetchSuggestions: React.PropTypes.func,
  floatingLabelText: React.PropTypes.string,
};

export default HOC(FormsyAutocomplete);
