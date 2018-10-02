import { combineReducers } from 'redux';
import { loadState } from '../localStorage';

import weatherReducer from './reducer_weather';
const rootReducer = combineReducers({
  weather: weatherReducer,
});

export default rootReducer;
