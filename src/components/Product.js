import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { productPage } from "./../actions";
import {Col,Button,CardBody,CardTitle, CardSubtitle } from 'reactstrap';

class Product extends React.Component {

  render() {
    const { item, addClick, modalClick, productPage } = this.props;
    return (
     <Col sm={6} md={4} lg={3} className="mt-3">
        <div className="product-box">
          <NavLink
            to={`./products/${item.id}`}
            onClick={() => productPage(item)}
          >
            <img src={item.image} className="img-fluid" />
          </NavLink>
          <CardBody>
            <CardTitle children={item.title} className="text-center mb-4" />
            <div className="info-box d-flex justify-content-around">
              <CardSubtitle children={`${item.price} $`} />
              <CardSubtitle children={`inventori: ${item.inventory}`} />
            </div>
          </CardBody>
          <div className="btn-box d-flex justify-content-around mb-2">
            <Button
              color="success"
              disabled={item.inventory > 0 ? false : true}
              onClick={addClick}
            >
              {item.inventory > 0 ? "Add To Cart" : "sold out"}
            </Button>

            <Button color="warning" onClick={modalClick} >
              Quick view
            </Button>
          </div>
          <div className="btn-box d-flex">
            <NavLink
              to={`./products/${item.id}`}
              onClick={() => productPage(item)}
              className="btn btn-primary w-100"
            >
              View Product
            </NavLink>
          </div>
        </div>
      </Col>
    );
  }
}
const mapStateToprops=state=>({
  productsReducer:state.productsReducer
})
const mapDispatchToProps = dispatch => ({
  productPage: item => dispatch(productPage(item)),
});
export default connect(mapStateToprops,mapDispatchToProps)(Product);
