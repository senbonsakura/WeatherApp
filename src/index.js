import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import App from './components/app';
import reducers from './reducers';
const loggerMiddleware = createLogger()
import { saveState } from './localStorage';
import throttle from 'lodash/function/throttle';
const createStoreWithMiddleware = applyMiddleware(thunkMiddleware,loggerMiddleware)(createStore);
const store = createStoreWithMiddleware(reducers);
store.subscribe(throttle(()=> {
  const weather = store.getState().weather.weather;
  saveState(weather &&{
    cities: weather.map((city) =>({
      name:city.city.name,
      id:city.city.id,
    }) )
  })
},1000));


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('.container'));
