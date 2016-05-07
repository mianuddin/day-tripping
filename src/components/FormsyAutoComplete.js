import React from 'react';
import AutoComplete from 'material-ui/lib/auto-complete';
import { HOC } from 'formsy-react';

class FormsyAutoComplete extends React.Component {

  handleChange(value) { this.props.setValue(value); }

  render() {
    return (
      <AutoComplete
        filter={AutoComplete.noFilter}
        dataSource={this.props.options}
        onNewRequest={this.handleChange}
        onUpdateInput={this.props.fetchSuggestions}
        floatingLabelText={this.props.floatingLabelText}
      />
    );
  }
}

FormsyAutoComplete.propTypes = {
  options: React.PropTypes.array.isRequired,
  setValue: React.PropTypes.func.isRequired,
  fetchSuggestions: React.PropTypes.func,
  floatingLabelText: React.PropTypes.string,
};

export default HOC(FormsyAutoComplete);
