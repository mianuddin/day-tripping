import React from 'react';
import { GoogleMap, GoogleMapLoader, Marker } from 'react-google-maps';

import LocationStore from '../stores/LocationStore';
import * as LocationActions from '../actions/LocationActions';

import MapStyle from '../styles/UltraWhiteWithLabels.json';

class Gmap extends React.Component {
  constructor(props) {
    super(props);

    this.getGeolocation = this.getGeolocation.bind(this);
    this.getLocations = this.getLocations.bind(this);
    this.handleMapCenterChanged = this.handleMapCenterChanged.bind(this);

    this.state = {
      center: this.props.initialCenter,
      locations: LocationStore.getAll(),
    };
  }

  componentWillMount() {
    LocationActions.getUserGeolocation();
    LocationStore.on('change_geolocation', this.getGeolocation);
    LocationStore.on('change_location', this.getLocations);
  }

  componentWillUnmount() {
    LocationStore.removeListener('change_geolocation', this.getGeolocation);
    LocationStore.removeListener('change_location', this.getLocations);
  }

  getGeolocation() {
    this.setState({ center: LocationStore.getGeolocation() });
  }

  getLocations() {
    this.setState({ locations: LocationStore.getAll() });
  }

  /* global google */
  handleMapCenterChanged() {
    const newPos = this.refs.map.getCenter();
    if (newPos.equals(new google.maps.LatLng(this.props.initialCenter))) {
      return;
    }

    this.setState({
      center: { lat: newPos.lat(), lng: newPos.lng() },
    });
  }


  render() {
    const { center } = this.state;
    const markers = this.state.locations.map((location, index) => ({
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
            center={center}
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
};

export default Gmap;
