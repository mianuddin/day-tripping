import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);

    this.state = { name: '' };
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }

  handleSubmit() {
    if (!this.refs.location_name.value) {
      return;
    }

    this.setState({ name: '' });
    this.props.onUserInput(this.refs.location_name.value);
  }

  render() {
    return (
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <input id="location_name" ref="location_name" type="text" className="validate" onChange={this.handleNameChange} value={this.state.name}/>
              <label htmlFor="location_name">Location Name</label>
            </div>
          </div>
          <div className="row">
            <div className="col s6">
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
