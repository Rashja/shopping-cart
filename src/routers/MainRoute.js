import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter,Route,Switch,Redirect }from 'react-router-dom';
import Head from './Head';
import Home from "./Home";
import ShoppingCart from './../components/ShoppingCart';
import Login from './../components/Login';
import NotFounPage from './NotFoundPage';
import ProductPage from './../components/ProductPage';
import Cart from '../components/Cart';

const AuthRoute=({ component:Component, ...rest })=>(
    <Route {...rest} render={props=>(
        rest.userReducer ? (
            <Component {...props} />
        ) : (
            <Redirect to={{ pathname:'./Login' }} />
        )
    )} />
)

const MainRoute=(props)=>{
    return(
    <BrowserRouter>
    <div>
        <Head />
        <Switch>
            <Route  path='/' component={Home} exact />
            <AuthRoute  path='/Products' component={ShoppingCart} exact userReducer={props.userReducer.mode} />
            <Route  path='/Products/:id' component={ProductPage}  />
            <Route  path='/Cart' component={Cart}  />
            <Route  path='/Login' component={Login}  />
            <Route  component={NotFounPage} />
        </Switch>
    </div>
</BrowserRouter>
)}
const mapStateToProps=state=>({
        userReducer:state.userReducer
})
export default connect(mapStateToProps)(MainRoute,AuthRoute);