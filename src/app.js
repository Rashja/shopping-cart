import "regenerator-runtime/runtime";
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './reducers/index';
import MainRoute from './routers/MainRoute';
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/style.css";


const Jsx=(
    <Provider store={store} >
        <MainRoute />
    </Provider>
)
ReactDOM.render(Jsx,document.getElementById('app'))