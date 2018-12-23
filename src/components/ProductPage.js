import React from 'react';
import { connect } from 'react-redux';

class ProductPage extends React.Component{
    render(){
        let {productsReducer}=this.props;
        return(
            <div>
                <h1>Info Of Each Product</h1>
                <img src={productsReducer.image} width="600" height="600" />
                <h2>
                    {
                       `Title :${productsReducer.title} - 
                        Price : ${productsReducer.price} - 
                        Inventory : ${productsReducer.inventory}`
                    }
                </h2>
            </div>
        )
    }
}

const mapStateToProps=state=>{
    return{
        productsReducer:state.productsReducer
    }
}
export default connect(mapStateToProps)(ProductPage);