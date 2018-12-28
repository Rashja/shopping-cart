import React from "react";

class CartProduct extends React.Component {
  render() {
    const { title, price, quantity,onClick } = this.props;
    return (
      <div>
        <h5>
            {
              `Title : ${title} Price : ${price} $ - inventory : ${quantity}`
            }
        </h5>
        <button className="btn btn-danger" onClick={onClick} >x</button>
        <hr />
      </div>
    );
  }
}
export default CartProduct;
