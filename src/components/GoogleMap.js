import React, { Component } from 'react';

class GoogleMap extends Component {

  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 7,
      scrollwheel:  false,
      disableDefaultUI: true,
      zoomControl: false,
      draggable: false,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    })
  }
  render () {
    return (
      <div ref="map">

      </div>
    );
  }
}

export default GoogleMap;
