import React from 'react';

class CartProduct extends React.Component{
    render(){
        const {title,price,quantity}=this.props;        
        return(
            <div>
                {`Title : ${title} - Price : ${price} - inventory : ${quantity}`}
            </div>
        )
    }
}
export default CartProduct;