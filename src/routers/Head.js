import React from 'react';
import {NavLink} from 'react-router-dom';

const Head=()=>(
    <div>
        <h1>Shopping Cart</h1>
        <NavLink to='/' exact={true} >Home</NavLink>
        <NavLink to='/Products'>Products</NavLink>
        <NavLink to='/Login'>Log In</NavLink>
    </div>

);
export default Head;