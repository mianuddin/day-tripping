import React from 'react';

import Formsy from 'formsy-react';
import FormsyText from 'formsy-material-ui/lib/FormsyText';
import FormsyAutoComplete from './FormsyAutoComplete';
import RaisedButton from 'material-ui/lib/raised-button';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(data) {
    this.props.handleSubmit(data.locationName, data.locationAddress);
    this.refs.form.reset();
  }

  render() {
    return (
      <Formsy.Form
        ref="form"
        onValidSubmit={this.submitForm}
      >
        <div className="row">
          <div className="col-xs-12">
            <FormsyText
              required
              name="locationName"
              hintText="SF City Hall"
              floatingLabelText="Location Name"
              validations="isExisty"
            />
          </div>
          <div className="col-xs-12">
            <FormsyAutoComplete
              required
              name="locationAddress"
              floatingLabelText="Location Address"
              validations="isExisty"
              options={this.props.autocompleteOptions}
              fetchSuggestions={this.props.fetchSuggestions}
            />
          </div>
        </div>
        <div className="row">
          <RaisedButton
            type="submit"
            label="Submit"
            primary
          />
        </div>
      </Formsy.Form>
    );
  }
}

Form.propTypes = {
  handleSubmit: React.PropTypes.func,
  autocompleteOptions: React.PropTypes.array,
  fetchSuggestions: React.PropTypes.func,
};

export default Form;
