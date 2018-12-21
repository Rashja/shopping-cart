import React from 'react';
import {connect} from 'react-redux';
import Header from './Header';
import Products from './Products';
import {getData} from './../actions';
import ProductModal from './ProductModal';

class ShoppingCart extends React.Component{
    componentDidMount(){
        this.props.getData;
    }
    render(){
        return(
            <div>
                <Header />
                <hr />
                <Products />
                <ProductModal />
            </div>
        )
    }
}
const mapStateToProps=dispatch=>{
    return{
        getData:dispatch(getData())
    }
}
export default connect(null,mapStateToProps)(ShoppingCart);