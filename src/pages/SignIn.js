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
        <header
          className="hero"
          style={{
            backgroundImage: 'url(img/map.png)',
          }}
        >
          <AppBar
            title="Day Tripping"
            showMenuIconButton={false}
            style={{
              background: 'none',
              boxShadow: 'none',
            }}
            titleStyle={{
              color: '#FFF',
              fontFamily: 'Poppins, sans-serif',
            }}
          />
          <div className="container hero--height">
            <div className="row center-xs middle-xs hero--height">
              <div className="col-xs-12">
                <span className="headline">Explore your world</span>
              </div>
            </div>
          </div>
        </header>
        <div className="container">
          <div className="row center-xs">
            <div className="col-xs">
              <RaisedButton label="Get Started" style={style} onClick={this.props.attemptLogin} />
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
