/* global google */
import React from 'react';
import GoogleMapReact from 'google-map-react';
import PlaceIcon from 'material-ui/svg-icons/maps/place';
import MyLocationIcon from 'material-ui/svg-icons/maps/my-location';

import MapStyle from '../styles/other/EvenLighter.json';

const MARKER_SIZE = 40;

const markerStyle = {
  position: 'absolute',
  width: MARKER_SIZE,
  height: MARKER_SIZE,
  left: -MARKER_SIZE / 2,
  top: -MARKER_SIZE,
};

class Gmap extends React.Component {

  render() {
    const markers = this.props.locations.map((location) => (
      <PlaceIcon lat={location.lat} lng={location.lng} key={location.id} style={markerStyle} />
    ));

    return (
      <GoogleMapReact
        center={this.props.center}
        defaultZoom={14}
        options={{
          styles: MapStyle,
        }}
      >
        { markers }
      </GoogleMapReact>
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
