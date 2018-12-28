import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import Products from "./Products";
import { getData } from "./../actions";
import ProductModal from "./ProductModal";

class ShoppingCart extends React.Component {
  componentDidMount() {
    if (!this.props.productsIsLoaded) {
      this.props.getData();
    }
  }
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <Products />
        <ProductModal />
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  getData: () => dispatch(getData())
});

const mapState = state => ({
  productsIsLoaded: Object.keys(state.productsReducer.products).length
});
export default connect(
  mapState,
  mapDispatchToProps
)(ShoppingCart);
