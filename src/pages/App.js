import React from 'react';

import ThemeManager from 'material-ui/lib/styles/theme-manager';
import MyRawTheme from '../styles/other/RedTheme';

import '../styles/scss/index.scss';

class App extends React.Component {
  getChildContext() {
    return {
      muiTheme: ThemeManager.getMuiTheme(MyRawTheme),
    };
  }

  render() {
    return (
      <div>
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
