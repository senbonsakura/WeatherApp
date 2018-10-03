import axios from 'axios';

const API_KEY = 'AIzaSyA_mfip0GXhviSD2uIKBJNUdPjYbhztVkI';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&units=metric`;

export const FETCH_WEATHER_REQUEST = 'FETCH_WEATHER_REQUEST';
export const FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS';
export const FETCH_WEATHER_ERROR = 'FETCH_WEATHER_ERROR';
export const ADD_CITY = 'ADD_CITY';
export const REMOVE_CITY = 'REMOVE_CITY';

export const removeCity = (id) => ({
  type: REMOVE_CITY,
  payload: {
    id
  }
});

const requestWeather = () => ({
  type: FETCH_WEATHER_REQUEST
});

const errorWeather = (error) => ({
  type: FETCH_WEATHER_ERROR,
  error
});

const receiveWeather = (payload) => ({
  type: FETCH_WEATHER_SUCCESS,
  payload,
  error: ''
});
const fetchWeather = (city) => {
  return (dispatch, getState) => {
    const url = `${ROOT_URL}&q=${city}`;

    dispatch(requestWeather());

    axios.get(url)
      .then((response) => {
          const {weather} = getState();
          const cityList = weather.weather.map(item => item.city.id);
          if (!cityList.includes(response.data.city.id)) {
            dispatch(receiveWeather(response.data));
          }
        }
        , (response) => dispatch(errorWeather(response.message)));

  };
};

export default fetchWeather;
