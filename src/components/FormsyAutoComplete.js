import React from 'react';
import AutoComplete from 'material-ui/lib/auto-complete';
import { HOC } from 'formsy-react';

class FormsyAutoComplete extends React.Component {
  constructor(props) {
    super(props);

    this.handleUpdateInput = this.handleUpdateInput.bind(this);
    this.handleNewRequest = this.handleNewRequest.bind(this);

    this.state = {
      value: this.props.defaultValue || this.props.value || '',
    };
  }

  componentWillMount() {
    this.props.setValue(this.props.defaultValue || this.props.value || '');
  }

  handleUpdateInput(searchText, dataSource) {
    this.props.setValue(searchText);
    if (this.props.onUpdateInput) this.props.onUpdateInput(searchText, dataSource);
  }

  handleNewRequest(chosenRequest, index) {
    this.props.setValue(chosenRequest);
    if (this.props.onNewRequest) this.props.onNewRequest(chosenRequest, index);
  }

  render() {
    const {
      defaultValue, // eslint-disable-line no-unused-vars
      onFocus,
      value, // eslint-disable-line no-unused-vars
      ...rest } = this.props;

    return (
      <AutoComplete
        {...rest}
        errorText={this.props.getErrorMessage()}
        onFocus={onFocus}
        onUpdateInput={this.handleUpdateInput}
        onNewRequest={this.handleNewRequest}
        searchText={this.props.getValue()}
      />
    );
  }
}

FormsyAutoComplete.propTypes = {
  defaultValue: React.PropTypes.any,
  name: React.PropTypes.string.isRequired,
  onFocus: React.PropTypes.func,
  onUpdateInput: React.PropTypes.func,
  onNewRequest: React.PropTypes.func,
  value: React.PropTypes.any,
  setValue: React.PropTypes.func.isRequired,
  getValue: React.PropTypes.func.isRequired,
  getErrorMessage: React.PropTypes.func.isRequired,
};

export default HOC(FormsyAutoComplete); // eslint-disable-line new-cap
