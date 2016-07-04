import React from 'react';
import AppBar from 'material-ui/lib/app-bar';

import ThemeManager from 'material-ui/lib/styles/theme-manager';
import MyRawTheme from '../styles/other/RedTheme';
import '../styles/partials/_base';

class App extends React.Component {
  getChildContext() {
    return {
      muiTheme: ThemeManager.getMuiTheme(MyRawTheme),
    };
  }

  render() {
    return (
      <div>
        <AppBar
          title="Day Tripping"
          showMenuIconButton={false}
          style={{
            background: '#fff',
            borderBottom: '4px solid #F06161',
          }}
          titleStyle={{
            color: '#2A363B',
            fontFamily: 'Poppins, sans-serif',
          }}
        />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.node,
};

App.childContextTypes = {
  muiTheme: React.PropTypes.object,
};

export default App;
