import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import RaisedButton from 'material-ui/lib/raised-button';
import { Link } from 'react-router';

import '../styles/scss/_modules/_SignIn.scss';

const style = {
  margin: 12,
};

class SignIn extends React.Component {
  render() {
    return (
      <div>
        <AppBar
          title="Day Tripping"
          showMenuIconButton={false}
          style={{
            background: '#F06161',
            boxShadow: 'none',
          }}
          titleStyle={{
            color: '#FFF',
            fontFamily: 'Poppins, sans-serif',
          }}
        />
        <div className="container">
          <div className="row center-xs">
            <h2>Sign in</h2>
          </div>

          <div className="row center-xs">
            <div className="col-xs">
              <RaisedButton label="Get Started" style={style} onClick={this.props.attemptLogin} />
            </div>
          </div>

          <div className="row center-xs">
            <div className="col-xs">
              <Link to="/app">
                <RaisedButton label="App" primary style={style} />
              </Link>
              <RaisedButton label="Log Out" secondary style={style} onClick={this.props.logoutUser} />
            </div>
          </div>

          <div className="row">
            <div className="col-xs">
              <h3>Debug</h3>
              <p>{JSON.stringify(this.props.auth)}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

SignIn.propTypes = {
  auth: React.PropTypes.object,
  attemptLogin: React.PropTypes.func,
  logoutUser: React.PropTypes.func,
};

export default SignIn;
