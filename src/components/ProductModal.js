import React from 'react';
import Modal from 'react-modal';
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';
import {closeModal,addToCart,productPage} from './../actions';
import {Container, Row, Col, Button} from 'reactstrap';

class ProductModal extends React.Component{
    render(){
        const {modalReducer,closeModal,addToCart}=this.props;
        console.log(modalReducer);
        
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
                                onClick={() => productPage(modalReducer)}
                            >
                            see the product page
                            </NavLink>

                            <Button
                                color="info"
                                onClick={()=>addToCart(modalReducer.id)}
                            >
                            Add To Cart
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
    productPage: item => dispatch(productPage(item))

})
const mapStateToProps=state=>{
    
    return{
        modalReducer:state.modalReducer,
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductModal);