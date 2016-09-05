import React from 'react';
import Formsy from 'formsy-react';
import FormsyText from 'formsy-material-ui/lib/FormsyText';
import AutoComplete from 'material-ui/AutoComplete';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';

import FormsyAutoComplete from './FormsyAutoComplete';

class LocationDialog extends React.Component {
  constructor(props) {
    super(props);

    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(data) {
    this.props.handleSubmit(data.locationName, data.locationAddress);
    this.refs.form.reset();
    this.props.toggleDialog();
  }

  render() {
    return (
      <Dialog
        title="Add a location"
        modal={false}
        onRequestClose={this.props.toggleDialog}
        open={this.props.isDialogOpen}
        bodyStyle={{
          padding: '0',
        }}
      >
        <Formsy.Form
          ref="form"
          onSubmit={this.submitForm}
        >
          <div className="LocationDialog__Inputs">
            <FormsyText
              required
              name="locationName"
              hintText="SF City Hall"
              floatingLabelText="Location Name"
              validations="isExisty"
              style={{
                width: '100%',
              }}
            />

            <br />

            <FormsyAutoComplete
              required
              name="locationAddress"
              floatingLabelText="Location Address"
              validations="isExisty"
              dataSource={this.props.autocompleteOptions}
              filter={AutoComplete.noFilter}
              onUpdateInput={this.props.fetchSuggestions}
              className="LocationDialog__AutoComplete"
              style={{
                width: '100%',
              }}
            />
          </div>
          <div className="LocationDialog__Actions">
            <RaisedButton
              type="submit"
              label="Submit"
              primary
            />
          </div>
        </Formsy.Form>
      </Dialog>
    );
  }
}

LocationDialog.propTypes = {
  handleSubmit: React.PropTypes.func,
  autocompleteOptions: React.PropTypes.array,
  fetchSuggestions: React.PropTypes.func,
  isDialogOpen: React.PropTypes.bool,
  toggleDialog: React.PropTypes.func,
};

export default LocationDialog;
