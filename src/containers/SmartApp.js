import { connect } from 'react-redux';

import App from './App';
import * as Actions from '../actions.js';

function mapStateToProps(state) {
  return {
    userDetails: state.get('user').toJS(),
    browser: state.get('browser'),
    app: state.get('app').toJS(),
  };
}

const mapDispatchToProps = (dispatch) => ({
  logoutUser: () => {
    dispatch(Actions.logoutUser());
  },
  toggleMobileDrawer: () => {
    dispatch(Actions.toggleMobileDrawer());
  },
  openAppBarPopover: (element) => {
    dispatch(Actions.openAppBarPopover(element));
  },
  closeAppBarPopover: () => {
    dispatch(Actions.closeAppBarPopover());
  },
});

const SmartApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default SmartApp;
