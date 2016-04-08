import React from 'react';
import AppBar from 'material-ui/lib/app-bar';

const App = props => (
  <div>
    <AppBar
      title="Day Tripping"
      showMenuIconButton={false}
    />
    <div className="container">
      {props.children}
    </div>
  </div>
);

App.propTypes = {
  children: React.PropTypes.node,
};

export default App;
