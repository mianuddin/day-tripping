import React from 'react';

import Gmap from '../components/Gmap';
import AdaptableCardContainer from '../components/AdaptableCardContainer';

const Trip = props => (
  <div className="row">
    <div className="col s6" styles="height:420px;width:50%">
      <Gmap />
    </div>
    <div className="col s6">
      <AdaptableCardContainer />
    </div>
  </div>
);

export default Trip;
