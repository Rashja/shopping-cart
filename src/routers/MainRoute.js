import React from 'react';
import {BrowserRouter,Route,Switch}from 'react-router-dom';
import Head from './Head';
import Home from "./Home";
import ShoppingCart from './../components/ShoppingCart';
import Login from './Login';
import NotFounPage from './NotFoundPage';
import Items from './Products';

const MainRoute=()=>(
    <BrowserRouter>
    <div>
        <Head />
        <Switch>
            <Route  path='/' component={Home} exact={true} />
            <Route  path='/Products' component={ShoppingCart} exact={true} />
            <Route  path='/Products/:id' component={Items} exact={true} />
            <Route  path='/Login' component={Login} exact={true} />
            <Route  component={NotFounPage} />
        </Switch>
    </div>
</BrowserRouter>
)
export default MainRoute;