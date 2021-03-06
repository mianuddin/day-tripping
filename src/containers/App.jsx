import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import Popover from 'material-ui/Popover';
import FlatButton from 'material-ui/FlatButton';
import MediaQuery from 'react-responsive';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import Exit from 'material-ui/svg-icons/action/exit-to-app';

import '../styles/scss/index.scss';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleAppBarPopoverToggle = this.handleAppBarPopoverToggle.bind(this);
  }

  handleAppBarPopoverToggle(event) {
    // This prevents ghost click.
    event.preventDefault();

    this.props.openAppBarPopover(event.currentTarget);
  }

  render() {
    const muiTheme = getMuiTheme({
      fontFamily: 'Open Sans, sans-serif',
      palette: {
        primary1Color: '#F06161',
        primary2Color: '#EB786B',
        accent1Color: '#3A7BA3',
        accent2Color: '#398ABD',
      },
    });

    const AppBarDropdown = (
      <MediaQuery minWidth={768}>
        <FlatButton
          label={this.props.userDetails.username || 'Loading...'}
          onTouchTap={this.handleAppBarPopoverToggle}
          style={{
            color: '#ffffff',
            margin: '7px 0px 0px',
          }}
          icon={<Avatar src={this.props.userDetails.photoURL} size={30} />}
        />
      </MediaQuery>
    );

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
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
            showMenuIconButton={this.props.browser.lessThan.small}
            onLeftIconButtonTouchTap={this.props.toggleMobileDrawer}
            iconElementRight={AppBarDropdown}
          />
          <MediaQuery maxWidth={768}>
            <Drawer
              docked={false}
              open={this.props.app.mobileDrawer.open}
              onRequestChange={this.props.toggleMobileDrawer}
            >
              <div
                style={{
                  padding: '16px 16px 0',
                  background: 'url("img/map.png") 25% 50%',
                }}
              >
                <Avatar src={this.props.userDetails.photoURL} size={56} />
                <span
                  style={{
                    display: 'block',
                    padding: '8px 0',
                    fontWeight: '500',
                    fontFamily: 'Roboto',
                    color: '#fff',
                  }}
                >
                  {this.props.userDetails.username}
                </span>
              </div>
              <Divider />
              <MenuItem
                onTouchTap={this.props.logoutUser}
                leftIcon={<Exit />}
                style={{
                  fontFamily: 'Roboto',
                }}
              >
                Log Out
              </MenuItem>
            </Drawer>
          </MediaQuery>

          <MediaQuery minWidth={768}>
            <Popover
              open={this.props.app.appBarPopover.open}
              anchorEl={this.props.app.appBarPopover.anchorEl}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              targetOrigin={{ horizontal: 'right', vertical: 'top' }}
              onRequestClose={this.props.closeAppBarPopover}
            >
              <div>
                <FlatButton label="Log Out" onClick={this.props.logoutUser} />
              </div>
            </Popover>
          </MediaQuery>

          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.node,
  userDetails: React.PropTypes.object,
  logoutUser: React.PropTypes.func,
  browser: React.PropTypes.object,
  toggleMobileDrawer: React.PropTypes.func,
  openAppBarPopover: React.PropTypes.func,
  closeAppBarPopover: React.PropTypes.func,
  app: React.PropTypes.object,
};

export default App;
