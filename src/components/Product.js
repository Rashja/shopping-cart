import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { productPage } from "./../actions";

class Product extends React.Component {

  render() {
    const { item, addClick, modalClick, productPage } = this.props;
    return (
      <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3 mt-3 ">
        <div className="product-box">
          <NavLink
            to={`./products/${item.id}`}
            onClick={() => productPage(item)}
          >
            <img src={item.image} className="img-fluid" />
          </NavLink>
          <div className="card-body">
            <h5 className="card-title text-center">{item.title}</h5>
            <div className="info-box d-flex justify-content-around">
              <span className="card-title">{item.price}$</span>
              <span className="card-title">inevntory:{item.inventory}</span>
            </div>
          </div>
          <div className="btn-box d-flex justify-content-around mb-2">
            <button
              disabled={item.inventory > 0 ? "" : "disabled"}
              onClick={addClick}
              className="btn btn-success"
            >
              {item.inventory > 0 ? "Add To Cart" : "sold out"}
            </button>

            <button onClick={modalClick} className="btn btn-warning">
              Quick view
            </button>
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
      </div>
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
