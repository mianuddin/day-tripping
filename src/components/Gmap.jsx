/* global google */
import React from 'react';
import GoogleMapReact from 'google-map-react';

import MapStyle from '../styles/other/EvenLighter.json';

class Gmap extends React.Component {

  render() {
    const markers = this.props.locations.map((location, index) => ({
      position: {
        lat: location.lat,
        lng: location.lng,
      },
      key: location.id,
      defaultAnimation: 2,
      index,
    }));

    return (
      <GoogleMapReact
        center={this.props.center}
        defaultZoom={14}
        options={{
          styles: MapStyle,
        }}
      />
    );
  }
}

Gmap.propTypes = {
  locations: React.PropTypes.array,
  initialCenter: React.PropTypes.object,
  center: React.PropTypes.object,
  setCenter: React.PropTypes.func,
  setBounds: React.PropTypes.func,
};

export default Gmap;
