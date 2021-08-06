import React from 'react';
import ReactDOM from 'react-dom';
import Book from './main/BookContainer';

import store from './main/app/store'
import { Provider } from 'react-redux'

import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
  <Provider store={store} >
    <Book />
  </Provider>,
  document.getElementById('root')
);