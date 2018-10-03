import React, { Component } from 'react';

class GoogleMap extends Component {
  myLatLon = {
    lat: this.props.city.coord.lat,
    lng: this.props.city.coord.lon
  };
  componentDidMount() {
    const map =new google.maps.Map(this.refs.map, {
      zoom: 7,
      scrollwheel:  false,
      disableDefaultUI: true,
      zoomControl: false,
      draggable: false,
      center: this.myLatLon
    });
    const  marker = new google.maps.Marker({
      position: this.myLatLon,
      title:`${this.props.city.name}, ${this.props.city.country}`,
      animation: google.maps.Animation.DROP,
    });
    marker.setMap(map);

  }

  render () {
    return (
      <div ref="map">

      </div>
    );
  }
}

export default GoogleMap;
