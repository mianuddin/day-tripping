import React from 'react';
import AppBar from 'material-ui/lib/app-bar';

import '../styles/scss/_modules/_SignIn.scss';

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
        <h2>Sign in</h2>

        <button onClick={this.props.attemptLogin}>Log in</button>
        <button onClick={this.props.logoutUser}>Log out</button>

        <h3>Debug</h3>
        <p>{JSON.stringify(this.props.auth)}</p>
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
