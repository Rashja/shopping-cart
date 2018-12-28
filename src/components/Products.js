import React from "react";
import { connect } from "react-redux";
import Product from "./Product";
import { addToCart, modalClick } from "../actions";
import {Container, Row} from 'reactstrap';

class Products extends React.Component {
  render() {
    const { productsList, addToCart, modalClick } = this.props;
    return (
      <Container>
        <Row>
          {productsList.map(item => (
            <Product
              key={item.id}
              item={item}
              modalClick={() => modalClick(item)}
              addClick={() => addToCart(item.id)}
            />
          ))}
        </Row>
      </Container>
    );
  }
}

const mapToArray = products => Object.keys(products).map(id => products[id]);

const stateMapToProps = state => ({
  productsList: mapToArray(state.productsReducer.products),
});

const mapDispatchToProps = dispatch => ({
  addToCart: id => dispatch(addToCart(id)),
  modalClick: item => dispatch(modalClick(item)),
});

export default connect(stateMapToProps,mapDispatchToProps)(Products);
