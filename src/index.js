import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleWare } from 'redux';


import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleWare = applyMiddleWare()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleWare(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
