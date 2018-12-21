import React from 'react';
import { NavLink } from 'react-router-dom';

class Product extends React.Component{
    render(){
        const {item,onClick}=this.props;
        return(
            <div style={{float:'left', width:'30%'}}>

                <NavLink to={`./products/${item.id}`} >
                    <img src={item.image} width='300' height='300' />
                    <p>title: {item.title} - price: {item.price}$ - inevntory: {item.inventory}</p>
                </NavLink>

                <button 
                       disabled={item.inventory > 0 ? '' : 'disabled' } 
                       onClick={onClick} >
                       {item.inventory > 0 ? 'Add To Cart' : 'sold out' }
                </button>

            </div>
        )
    }
}
export default Product;