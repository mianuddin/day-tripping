import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import RaisedButton from 'material-ui/lib/raised-button';

import '../styles/scss/_modules/_Landing.scss';

const Landing = (props) => (
  <div>
    <header
      className="Hero"
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
      <div className="container Hero--height">
        <div className="row center-xs middle-xs Hero--height">
          <div className="col-xs-12">
            <span className="Hero__Headline">Explore your world</span>
          </div>
        </div>
      </div>
    </header>
    <div className="container Remainder--height">
      <div className="row center-xs middle-xs Remainder--height">
        <div className="col-xs">
          <span className="Remainder__tagline">
            Easily keep track of the places you want to be, for free.
          </span><br />
          <RaisedButton
            label="Get Started"
            style={{
              margin: '1rem',
            }}
            onClick={props.attemptLogin}
          />
        </div>
      </div>
    </div>
  </div>
);

Landing.propTypes = {
  auth: React.PropTypes.object,
  attemptLogin: React.PropTypes.func,
  logoutUser: React.PropTypes.func,
};

export default Landing;
