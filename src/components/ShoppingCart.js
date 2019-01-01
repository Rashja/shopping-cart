import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import Products from "./Products";
import { getData } from "./../actions";
import ProductModal from "./ProductModal";
import {Container} from 'reactstrap';
import Pages from "./Pages";

class ShoppingCart extends React.Component {
  componentDidMount() {
    if (!this.props.productsIsLoaded) {
      this.props.getData();
    }
  }
  render() {
    return (
      <Container fluid >
        <Header />
        <Products />
        <ProductModal />
        <Pages />
      </Container>
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
