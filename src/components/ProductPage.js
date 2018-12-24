import React from 'react';
import { connect } from 'react-redux';
import { saveData } from './../actions';

class ProductPage extends React.Component{
    componentDidMount(){
        const json=localStorage.getItem('product');
        const product=JSON.parse(json);
        this.props.dispatch(saveData(product));
    }

    componentWillUnmount(){
        const json=JSON.stringify(this.props.productsReducer);
        localStorage.setItem('product',json);
    }
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