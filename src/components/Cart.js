import React from 'react';
import { connect } from 'react-redux';
import CartProduct from "./CartProduct";
import { checkOut } from './../actions';

class Cart extends React.Component{
    render(){
        const {cartProducts,total,checkOut}=this.props;
        return(
            <div>
                <h3>Your Cart</h3>
                {
                    cartProducts.length > 0 ? 
                    (cartProducts.map(product=><CartProduct key={product.id} {...product} />)) : 
                    (<h3>please add your products to cart</h3>)
                }
                <p>Total : {total} $</p>
                <button onClick={checkOut} disabled={cartProducts.length > 0 ? '' : 'disabled' } >Check Out</button>
            </div>
        )
    }
}
const getCartProducts=state=>{
    return state.cartReducer.addedIds.map(id=>({
        ...state.productsReducer[id],
        quantity :(state.cartReducer.quantityById[id] || 0 )    
    }))
}
const getTotal=state=>
        state.cartReducer.addedIds.reduce(
                (total,id)=>total + 
                state.productsReducer[id].price * 
                (state.cartReducer.quantityById[id] || 0),0).toFixed(2)

const mapStateToProps=state=>({
    cartProducts : getCartProducts(state),
    total: getTotal(state)
})
const mapDispatchToProps=dispatch=>({
    checkOut:()=>dispatch(checkOut())
})
export default connect(mapStateToProps,mapDispatchToProps)(Cart);