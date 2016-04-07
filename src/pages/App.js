import React from 'react';

import AdaptableCardContainer from '../components/AdaptableCardContainer';

class App extends React.Component {
  render() {
    return (
      <div>
        <nav className="teal">
          <div className="nav-wrapper container">
            <a href="#" className="brand-logo">Day Tripper</a>
          </div>
        </nav>
        <div className="container">
          <AdaptableCardContainer />
          {this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.node,
};

export default App;
