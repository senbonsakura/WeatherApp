import { FETCH_WEATHER_ERROR, FETCH_WEATHER_REQUEST, FETCH_WEATHER_SUCCESS, REMOVE_CITY } from '../actions';

const weatherReducer = (state = {weather: [], isLoading: false, error: ''}, action) => {

  switch (action.type) {
    case FETCH_WEATHER_REQUEST:
      return {
        weather: [...state.weather],
        isLoading: true,
        error: ''
      };
    case FETCH_WEATHER_SUCCESS:
      return {
        weather: [action.payload, ...state.weather],
        isLoading: false,
        error: ''
      };
    case FETCH_WEATHER_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    case REMOVE_CITY:
      return {weather: state.weather.filter(item => item.city.id !== action.payload.id)};
    default:
      return state;
  }
};

export default weatherReducer;
