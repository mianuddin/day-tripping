import { connect } from 'react-redux';

import App from './App';
import * as Actions from '../actions.js';

function mapStateToProps(state) {
  return {
    userDetails: state.get('user').toJS(),
    browser: state.get('browser'),
  };
}

const mapDispatchToProps = (dispatch) => ({
  logoutUser: () => {
    dispatch(Actions.logoutUser());
  },
});

const SmartApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default SmartApp;
