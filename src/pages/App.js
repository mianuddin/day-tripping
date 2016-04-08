import React from 'react';

const App = props => (
  <div>
    <nav className="teal">
      <div className="nav-wrapper container">
        <a href="#" className="brand-logo">Day Tripping</a>
      </div>
    </nav>
    <div className="container">
      {props.children}
    </div>
  </div>
);

App.propTypes = {
  children: React.PropTypes.node,
};

export default App;
