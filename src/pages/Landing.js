import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import RaisedButton from 'material-ui/lib/raised-button';
import LinearProgress from 'material-ui/lib/linear-progress';

import '../styles/scss/_modules/_Landing.scss';

const progressComponent = (
  <LinearProgress
    mode="indeterminate"
    color="#fff"
  />
);

const Landing = (props) => (
  <div>
    <div className="Hero">
      <div
        className="Hero__Main"
        style={{
          backgroundImage: 'url(img/map.png)',
        }}
      >
        { props.auth.currently === 'AWAITING_AUTH_RESPONSE' ? progressComponent : null }

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

        <div className="container">
          <div className="row center-xs middle-xs">
            <div className="col-xs-12">
              <span className="Hero__Headline">Explore your world</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container Hero__Content">
        <div className="row center-xs middle-xs">
          <div className="col-xs-10 col-sm-12">
            <span className="Hero__tagline">
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

    <footer className="Footer">
      <div className="container">
        <div className="row center-xs middle-xs">
          <div className="col-xs">
            <span>
              Designed and Developed with <a href="https://github.com/mianuddin/day-tripping">❤</a> by <a href="http://mianudd.in/">Mian Uddin</a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  </div>
);

Landing.propTypes = {
  auth: React.PropTypes.object,
  attemptLogin: React.PropTypes.func,
  logoutUser: React.PropTypes.func,
};

export default Landing;
