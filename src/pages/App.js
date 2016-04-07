import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <div className='nav-wrapper teal'>
            <a href='#' className='brand-logo'>Day Tripper</a>
          </div>
        </nav>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.node,
};

export default App;
