import "regenerator-runtime/runtime";
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import {store,persistor} from './reducers/index';
import MainRoute from './routers/MainRoute';
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/style.css";


const Jsx=(
    <Provider store={store} >
        <PersistGate loading={null} persistor={persistor} >
            <MainRoute />
        </PersistGate>
    </Provider>
)
ReactDOM.render(Jsx,document.getElementById('app'))