import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './home/routers/AppRouter';
import configureStore from './home/store/configureStore';

// Configure redux store
const store = configureStore();

// Setup provider
const main = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(main, document.getElementById('root'));
