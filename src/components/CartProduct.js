import React from 'react';

class CartProduct extends React.Component{
    render(){
        console.log(this.props);
        
        const {title,price,quantity}=this.props        
        return(
            <div>
                {`Title : ${title} - Price : ${price} - inventory : ${quantity}`}
            </div>
        )
    }
}
export default CartProduct;