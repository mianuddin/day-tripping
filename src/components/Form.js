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

  handleSubmit() {}

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
            />
          </div>
          <div className="col-xs-12">
            <FormsyText
              required
              name="locationAddress"
              ref="location_address"
              hintText="San Francisco, CA 94102"
              floatingLabelText="Location Address"
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

export default Form;
