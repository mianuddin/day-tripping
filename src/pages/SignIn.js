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
      </div>
    );
  }
}

export default SignIn;
