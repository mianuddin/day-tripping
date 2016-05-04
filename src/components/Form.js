import React from 'react';

import Formsy from 'formsy-react';
import FormsyText from 'formsy-material-ui/lib/FormsyText';
import RaisedButton from 'material-ui/lib/raised-button';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = { name: '', address: '' };
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }

  handleAddressChange(e) {
    this.setState({ address: e.target.value });
  }

  handleFieldChange(event, ref) {
    this.setState({ [ref]: event });
  }

  handleSubmit() {
    if (!this.state.name || !this.state.address) {
      return;
    }

    this.props.onUserInput(this.state.name, this.state.address);
    this.setState({ name: '', address: '' });
  }

  render() {
    return (
      <Formsy.Form
        onValidSubmit={this.handleSubmit}
      >
        <div className="row">
          <div className="col-xs-12">
            <FormsyText
              required
              name="locationName"
              ref="location_name"
              hintText="SF City Hall"
              floatingLabelText="Location Name"
              onChange={this.handleNameChange}
              value={this.state.name}
            />
          </div>
          <div className="col-xs-12">
            <FormsyText
              required
              name="locationAddress"
              ref="location_address"
              hintText="San Francisco, CA 94102"
              floatingLabelText="Location Address"
              onChange={this.handleAddressChange}
              value={this.state.address}
            />
          </div>
        </div>
        <div className="row">
          <RaisedButton
            label="Submit"
            primary style={{ margin: 12 }}
          />
        </div>
      </Formsy.Form>
    );
  }
}

Form.propTypes = {
  onUserInput: React.PropTypes.func,
};

export default Form;
