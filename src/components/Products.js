import React from 'react';
import { connect } from 'react-redux';
import Product from './Product';
import { addToCart,modalClick } from '../actions';

class Products extends React.Component{
    
    render(){
        const {productsList,addToCart,modalClick}=this.props;
        return(
            <div>
                {productsList.map((item)=>
                            <Product 
                                key={item.id} 
                                item={item} 
                                modalClick={modalClick} 
                                addClick={()=>addToCart(item.id)}
                                 />)}                
            </div>
        )
    }
}

const mapToArray=products=>Object.keys(products).map(id=>products[id])

const stateMapToProps=state=>({
        productsList:mapToArray(state.productsReducer)
})

const mapDispatchToProps=dispatch=>({
        addToCart:id=>dispatch(addToCart(id)),
        modalClick:()=>dispatch(modalClick())
})

export default connect(stateMapToProps,mapDispatchToProps)(Products);