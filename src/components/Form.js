import React from 'react';

import Formsy from 'formsy-react';
import FormsyText from 'formsy-material-ui/lib/FormsyText';
import RaisedButton from 'material-ui/lib/raised-button';

const Form = props => {
  function submitForm(data) {
    props.handleSubmit(data.locationName, data.locationAddress);
  }

  return (
    <Formsy.Form
      onValidSubmit={submitForm}
    >
      <div className="row">
        <div className="col-xs-12">
          <FormsyText
            required
            name="locationName"
            hintText="SF City Hall"
            floatingLabelText="Location Name"
          />
        </div>
        <div className="col-xs-12">
          <FormsyText
            required
            name="locationAddress"
            hintText="San Francisco, CA 94102"
            floatingLabelText="Location Address"
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
};

Form.propTypes = {
  handleSubmit: React.PropTypes.func,
};

export default Form;
