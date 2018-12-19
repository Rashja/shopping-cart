import React from 'react';
import { connect } from 'react-redux';
import Product from './Product';
import { addToCart } from '../actions';

class Products extends React.Component{
    
    render(){
        const {productsList,AddCart}=this.props;
        return(
            <div>
                {productsList.map((item)=><Product key={item.id} item={item} onClick={()=>AddCart(item.id)} />)}                
            </div>
        )
    }
}
const getProducts=products=>Object.keys(products).map(id=>products[id])

const stateMapToProps=state=>{
    return{
        productsList:getProducts(state.productsReducer)
    }
}

const mapDispatchToProps=dispatch=>({

    AddCart:id=>dispatch(addToCart(id))
})

export default connect(stateMapToProps,mapDispatchToProps)(Products);