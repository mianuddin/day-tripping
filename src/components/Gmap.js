import React from 'react';
import { GoogleMap, GoogleMapLoader, Marker } from 'react-google-maps';

import LocationStore from '../stores/LocationStore';
import * as LocationActions from '../actions/LocationActions';

const style = [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}];

class Gmap extends React.Component {
  constructor(props) {
    super(props);

    this.handleMapCenterChanged = this.handleMapCenterChanged.bind(this);

    this.state = {
      center: this.props.initialCenter,
      locations: LocationStore.getAll(),
    };
  }

  componentWillMount() {
    LocationActions.getUserGeolocation();
    LocationStore.on('change_geolocation', () => {
      this.setState({ center: LocationStore.getGeolocation() });
    });
    LocationStore.on('change_location', () => {
      this.setState({ locations: LocationStore.getAll() });
    });
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
              styles: style,
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
