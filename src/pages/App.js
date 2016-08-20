import React from 'react';

import ThemeManager from 'material-ui/lib/styles/theme-manager';
import AppBar from 'material-ui/lib/app-bar';
import Popover from 'material-ui/lib/popover/popover';
import FlatButton from 'material-ui/lib/flat-button';
import MyRawTheme from '../styles/other/RedTheme';

import '../styles/scss/index.scss';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };

    this.handleTouchTap = this.handleTouchTap.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
  }

  getChildContext() {
    return {
      muiTheme: ThemeManager.getMuiTheme(MyRawTheme),
    };
  }

  handleTouchTap(event) {
    event.preventDefault();
    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  }

  handleRequestClose() {
    this.setState({
      open: false,
    });
  }

  render() {
    const AppBarDropdown = (
      <FlatButton
        label={this.props.authDetails.username || 'Loading...'}
        onTouchTap={this.handleTouchTap}
        style={{ color: '#ffffff' }}
      />
    );

    return (
      <div>
        <AppBar
          title="Day Tripping"
          style={{
            background: '#F06161',
          }}
          titleStyle={{
            color: '#FFF',
            fontFamily: 'Poppins, sans-serif',
          }}
          iconElementRight={AppBarDropdown}
        />
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          targetOrigin={{ horizontal: 'right', vertical: 'top' }}
          onRequestClose={this.handleRequestClose}
        >
          <div>
            <FlatButton label="Log Out" onClick={this.props.logoutUser} />
          </div>
        </Popover>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.node,
  authDetails: React.PropTypes.object,
  logoutUser: React.PropTypes.func,
};

App.childContextTypes = {
  muiTheme: React.PropTypes.object,
};

export default App;
