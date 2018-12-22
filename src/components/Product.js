import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from "react-redux";
import { productPage } from './../actions';

class Product extends React.Component{
    render(){
        const {item,addClick,modalClick,productPage}=this.props;
        return(
            <div style={{float:'left', width:'30%'}}>

                <NavLink to={`./products/${item.id}`} onClick={()=>productPage(item)} >
                       <img src={item.image} width='300' height='300' />
                       <p>title: {item.title} - price: {item.price}$ - inevntory: {item.inventory}</p>
                </NavLink>

                <button 
                       disabled={item.inventory > 0 ? '' : 'disabled' } 
                       onClick={addClick} >
                       {item.inventory > 0 ? 'Add To Cart' : 'sold out' }
                </button>

                <button onClick={modalClick} >
                        Quick view
                </button>

            </div>
        )
    }
}
const mapDispatchToProps=dispatch=>({
    productPage:(item)=>dispatch(productPage(item))
})
export default connect(null,mapDispatchToProps)(Product);