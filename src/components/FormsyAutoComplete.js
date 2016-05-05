import React from 'react';
import AutoComplete from 'material-ui/lib/auto-complete';
import { HOC } from 'formsy-react';

class FormsyAutocomplete extends React.Component {

  onChange(e) { this.props.fetchSuggestions(e.target.value); }

  handleChange(value) { this.props.setValue(value); }

  render() {
    return (
      <AutoComplete
        filter={AutoComplete.noFilter}
        triggerUpdateOnFocus
        dataSource={this.props.options}
        onNewRequest={this.handleChange}
        onChange={this.props.onChange}
      />
    );
  }
}

FormsyAutocomplete.propTypes = {
  options: React.PropTypes.array,
  setValue: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func,
  fetchSuggestions: React.PropTypes.func,
};

export default HOC(FormsyAutocomplete);
