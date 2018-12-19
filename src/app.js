import "regenerator-runtime/runtime";
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ShoppingCart from './components/ShoppingCart';
import store from './reducers/index.js';

ReactDOM.render(<Provider store={store} ><ShoppingCart /></Provider>,document.getElementById('app'));