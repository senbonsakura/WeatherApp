import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchWeather from '../actions';
import { loadState } from '../localStorage';

class SearchBar extends Component {
  state = {term: ''};

  onInputChange = (event) => {
    this.setState({term: event.target.value});
  };
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({term: ''});
  };
  componentDidMount() {
    const {cities}= loadState();
    cities.forEach(city => this.props.fetchWeather(city.name))

  }
  render () {
    return (
      <div>
        <form onSubmit={this.onFormSubmit} className="input-group">
          <input
            placeholder="Add cities"
            className="form-control"
            onChange={this.onInputChange}
            value={this.state.term}
          />
          <span className="input-group-btn">
            <button className="btn btn-secondary">Submit</button>
          </span>
        </form>
      </div>
    );
  }
}


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({fetchWeather}, dispatch);
};

export default connect(null, mapDispatchToProps)(SearchBar);
