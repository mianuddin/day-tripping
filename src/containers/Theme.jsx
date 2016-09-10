import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import '../styles/scss/index.scss';

const Theme = (props) => {
  const muiTheme = getMuiTheme({
    fontFamily: 'Open Sans, sans-serif',
    palette: {
      primary1Color: '#F06161',
      primary2Color: '#EB786B',
      accent1Color: '#3A7BA3',
      accent2Color: '#398ABD',
    },
  });

  return (
    <MuiThemeProvider muiTheme={muiTheme}>
      <div>
        {props.children}
      </div>
    </MuiThemeProvider>
  );
};

Theme.propTypes = {
  children: React.PropTypes.node,
};

export default Theme;
