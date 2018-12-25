import React from 'react';

class CartProduct extends React.Component{
  
    render(){
        const {title,price,quantity,onClick}=this.props;        
        return(
            <div>
                {`Title : ${title} - Price : ${price} - inventory : ${quantity}`}
                <button onClick={onClick} >x</button>
            </div>
        )
    }
}
export default CartProduct;