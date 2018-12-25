import React from "react";

class CartProduct extends React.Component {
  render() {
    const { title, price, quantity,onClick } = this.props;
    return (
      <div>
        <h5>
          {
            /* {`Title : ${title} Price : ${price} - inventory : ${quantity}`} */
            title
          }
        </h5>
        <h6>{price} $</h6>
        <h6>{`inventory: ${quantity}`}</h6>
        <button className="btn btn-danger" onClick={onClick} >x</button>
        <hr />
      </div>
    );
  }
}
export default CartProduct;
