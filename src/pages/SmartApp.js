import App from './App';
import { connect } from 'react-redux';
import * as Actions from '../actions.js';

function mapStateToProps(state) {
  return {
    authDetails: state.get('auth').toJS(),
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
