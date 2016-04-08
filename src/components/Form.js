import React from 'react';

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

  handleSubmit() {
    if (!this.refs.location_name.value || !this.refs.location_address.value) {
      return;
    }

    this.setState({ name: '', address: '' });
    this.props.onUserInput(this.refs.location_name.value, this.refs.location_address.value);
  }

  render() {
    return (
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s8">
              <input id="location_name" ref="location_name" type="text"
                className="validate" onChange={this.handleNameChange} value={this.state.name}
              />
              <label htmlFor="location_name">Location Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s8">
              <input id="location_address" ref="location_address" type="text"
                className="validate" onChange={this.handleAddressChange} value={this.state.address}
              />
              <label htmlFor="location_address">Location Address</label>
            </div>
          </div>
          <div className="row">
            <div className="col s8">
              <a className="waves-effect waves-light btn" onClick={this.handleSubmit}>Submit</a>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  onUserInput: React.PropTypes.func,
};

export default Form;
