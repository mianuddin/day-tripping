import { connect } from 'react-redux';

import Landing from './Landing';
import * as Actions from '../actions.js';

function mapStateToProps(state) {
  return {
    auth: state.get('auth').toJS(),
  };
}

const mapDispatchToProps = (dispatch) => ({
  attemptLogin: () => {
    dispatch(Actions.attemptLogin());
  },
  logoutUser: () => {
    dispatch(Actions.logoutUser());
  },
});

const SmartLanding = connect(
  mapStateToProps,
  mapDispatchToProps
)(Landing);

export default SmartLanding;
