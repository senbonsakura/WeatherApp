import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {removeCity} from '../actions';
import Chart from '../components/Chart';
import GoogleMap from '../components/GoogleMap';

class WeatherList extends Component {
  renderWeather = (cityData) => {
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const {lat, lon} = cityData.city.coord;

    return (
      <tr key={cityData.city.id}>
        <td><GoogleMap lat={lat} lon={lon}/></td>
        <td><Chart data={temps} color="orange" units="C"/></td>
        <td><Chart data={pressures} color="green" units="hPa"/></td>
        <td><Chart data={humidities} color="black" units="%"/></td>
        <td><span className="remove-icon" onClick={()=> this.props.removeCity(cityData.city.id)}>Remove</span></td>
      </tr>
    );
  };

  render () {
    return (
      <div>
        {this.props.error && <div className="alert alert-danger" role=" alert">
          {this.props.error}
        </div>}
        <table className=" table table-hover">

          <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
            <th></th>

          </tr>
          </thead>
          <tbody>
          {this.props.weather.map(this.renderWeather)}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => (state.weather);
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({removeCity}, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(WeatherList);
