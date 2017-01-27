import React from 'react';
import Formsy from 'formsy-react';
import AutoComplete from 'material-ui/AutoComplete';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import { Link, hashHistory } from 'react-router';

import FormsyAutoComplete from './FormsyAutoComplete';

class LocationDialog extends React.Component {
  constructor(props) {
    super(props);

    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(data) {
    this.props.handleSubmit(this.props.autocompleteOptions.find((suggestion) => (suggestion.address === data.locationAddress)));
    this.refs.form.reset();
    hashHistory.push('/app');
  }

  render() {
    return (
      <Paper className="LocationForm" zDepth={1} rounded={false}>
        <Toolbar
          style={{
            background: 'transparent',
          }}
        >
          <ToolbarGroup firstChild>
            <Link to="/app">
              <IconButton
                style={{
                  lineHeight: '56px',
                  height: '56px',
                  width: '56px',
                }}
              >
                <ArrowBack
                  color="#757575"
                  hoverColor="#333333"
                />
              </IconButton>
            </Link>

            <ToolbarTitle
              text="Add"
              style={{
                color: '#757575',
              }}
            />
          </ToolbarGroup>
        </Toolbar>

        <Formsy.Form
          ref="form"
          onSubmit={this.submitForm}
          style={{
            background: '#F7F7F7',
            height: '100%',
          }}
        >
          <div className="LocationForm__Inputs">
            <FormsyAutoComplete
              required
              name="locationAddress"
              floatingLabelText="Search for place"
              validations="isExisty"
              dataSource={this.props.autocompleteOptions.map((suggestion) => (suggestion.address))}
              filter={AutoComplete.noFilter}
              onUpdateInput={this.props.fetchSuggestions}
              className="LocationForm__AutoComplete"
              style={{
                width: '100%',
              }}
            />
          </div>
          <div className="LocationForm__Actions">
            <RaisedButton
              type="submit"
              label="Submit"
              primary
            />
          </div>
        </Formsy.Form>
      </Paper>
    );
  }
}

LocationDialog.propTypes = {
  handleSubmit: React.PropTypes.func,
  autocompleteOptions: React.PropTypes.array,
  fetchSuggestions: React.PropTypes.func,
};

export default LocationDialog;
