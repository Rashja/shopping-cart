import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import Products from "./Products";
import { getData } from "./../actions";
import ProductModal from "./ProductModal";
import Cart from "./Cart";

class ShoppingCart extends React.Component {
  componentDidMount() {
    this.props.getData;
  }
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <Products />
        <ProductModal />
        <hr />
        <Cart />
      </div>
    );
  }
}
const mapStateToProps = dispatch => {
  return {
    getData: dispatch(getData())
  };
};
export default connect(
  null,
  mapStateToProps
)(ShoppingCart);
