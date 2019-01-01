import React from "react";
import { connect } from "react-redux";
import Product from "./Product";
import { addToCart, modalClick } from "../actions";
import {Container, Row} from 'reactstrap';
import SearchInput from "./SearchInput";

class Products extends React.Component {
  render() {
    const { productsList, addToCart, modalClick, searchReducer } = this.props;
    const productsFilter=productsList.filter(product=>{
       return product.title.indexOf(searchReducer) !== -1
    })
    return (
      <Container>
      <SearchInput />
        <Row> 
            {productsFilter.map(item => (
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
  searchReducer:state.searchReducer
});

const mapDispatchToProps = dispatch => ({
  addToCart: id => dispatch(addToCart(id)),
  modalClick: item => dispatch(modalClick(item)),
});

export default connect(stateMapToProps,mapDispatchToProps)(Products);
