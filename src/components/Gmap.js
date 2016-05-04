import React from 'react';
import { GoogleMap, GoogleMapLoader, Marker } from 'react-google-maps';

import '../styles/partials/_GmapContainer';
import MapStyle from '../styles/other/UltraWhiteWithLabels.json';

class Gmap extends React.Component {
  constructor(props) {
    super(props);

    this.handleMapCenterChanged = this.handleMapCenterChanged.bind(this);
  }

  /* global google */
  handleMapCenterChanged() {
    const newPos = this.refs.map.getCenter();
    if (newPos.equals(new google.maps.LatLng(this.props.initialCenter))) {
      return;
    }

    this.props.setCenter({
      lat: newPos.lat(),
      lng: newPos.lng(),
    });
  }

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
      <GoogleMapLoader
        containerElement={
          <div
            style={{
              height: '80vh',
              margin: '1.46rem 0 1.168rem 0',
            }}
          />
        }
        googleMapElement={
          <GoogleMap
            ref={'map'}
            defaultZoom={14}
            center={this.props.center}
            onCenterChanged={this.handleMapCenterChanged}
            defaultOptions={{
              styles: MapStyle,
            }}
          >
          {markers.map((marker) => (
            <Marker
              {...marker}
            />
          ))}
          </GoogleMap>
        }
      />
    );
  }
}

Gmap.propTypes = {
  locations: React.PropTypes.array,
  initialCenter: React.PropTypes.object,
  center: React.PropTypes.object,
  setCenter: React.PropTypes.func,
};

export default Gmap;
