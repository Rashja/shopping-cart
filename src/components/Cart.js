import React from "react";
import { connect } from "react-redux";
import CartProduct from "./CartProduct";
import { checkOut,handleDelete } from "./../actions";

class Cart extends React.Component {
  render() {
    const { cartProducts, total, checkOut,handleDelete } = this.props;
    return (
      <div>
        <div className="cart-box p-3 text-center">
          <h3>Your Cart</h3>
          <hr />
          {cartProducts.length > 0 ? (
            cartProducts.map(product => (
              <CartProduct key={product.id} {...product} onClick={()=>handleDelete(product.id)} />
            ))
          ) : (
              <h3>please add your products to cart</h3>
          )}
          <p>Total : {total} $</p>
          <button
            onClick={checkOut}
            disabled={cartProducts.length > 0 ? "" : "disabled"}
            className="btn btn-success"
          >
            Check Out
          </button>
        </div>
      </div>
    );
  }
}
const getCartProducts = state => {
  return state.cartReducer.addedIds.map(id => ({
    ...state.productsReducer.products[id],
    quantity: state.cartReducer.quantityById[id] || 0
  }));
};
const getTotal = state =>
  state.cartReducer.addedIds
    .reduce(
      (total, id) =>
        total +
        state.productsReducer.products[id].price *
          (state.cartReducer.quantityById[id] || 0),0).toFixed(2);

const mapStateToProps = state => ({
  cartProducts: getCartProducts(state),
  total: getTotal(state)
});

const mapDispatchToProps = dispatch => ({
  checkOut: () => dispatch(checkOut()),
  handleDelete:(id)=>dispatch(handleDelete(id))
});

export default connect(mapStateToProps,mapDispatchToProps)(Cart);
