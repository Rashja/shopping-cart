import React from 'react';
import Modal from 'react-modal';
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';
import { closeModal,addToCart,addItemFromModal } from './../actions';
import { Container, Row, Col, Button } from 'reactstrap';

class ProductModal extends React.Component{
    render(){
        const {modalReducer,closeModal,addToCart,addItemFromModal,productsReducer}=this.props;
        const modalProduct=productsReducer.products[modalReducer.id];
        return(
            
                <Modal style={{backgroundColor: "red"}} className="modal-message" ariaHideApp={false} contentLabel="modalReducer" isOpen={modalReducer.mode} onRequestClose={closeModal} >
                    <Container>
                    <Row>
                    <Col md={6}>
                        <img src={modalReducer.image} className="img-fluid" />
                    </Col>
                    
                    <Col md={6}>
                        <div className="text-md-left">
                            <h5>{`${modalReducer.title}`}</h5>  
                            <h6 className="price-box">{`${modalReducer.price} $`}</h6>
                            <NavLink
                                className="product-btn"
                                to={`./products/${modalReducer.id}`}
                                onClick={()=>addItemFromModal(modalReducer)}
                            >
                            see the product page
                            </NavLink>
                            <Button
                                color="info"
                                disabled={modalReducer.id && modalProduct.inventory > 0 ? false : true}
                                onClick={()=>addToCart(modalReducer.id)}
                            >
                            {modalReducer.id && modalProduct.inventory > 0 ? 'Add To Cart' : 'Sold Out'}
                            </Button>
                        </div>
                    </Col>
                    
                    </Row>
                    </Container>

                    <Button color="danger" className="close-btn" onClick={closeModal} >
                        <b>X</b>
                    </Button>
                </Modal>
            
        )
    }
}
const mapDispatchToProps=dispatch=>({
    closeModal:()=>dispatch(closeModal()),
    addToCart: id => dispatch(addToCart(id)),
    addItemFromModal:item =>dispatch(addItemFromModal(item))
})
const mapStateToProps=state=>({
        modalReducer:state.modalReducer,
        productsReducer:state.productsReducer
})
export default connect(mapStateToProps,mapDispatchToProps)(ProductModal);