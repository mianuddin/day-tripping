import React from 'react';
import AppBar from 'material-ui/lib/app-bar';

import ThemeManager from 'material-ui/lib/styles/theme-manager';
import MyRawTheme from '../styles/other/MUITealTheme';
import '../styles/partials/_base';
import '../styles/partials/_container';

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
        />
        <div className="container">
          {this.props.children}
        </div>
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
