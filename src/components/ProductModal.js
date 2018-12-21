import React from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import {closeModal} from './../actions';

class ProductModal extends React.Component{
    render(){
        const {modalReducer,closeModal}=this.props;
        return(
            <div>
                <Modal contentLabel="modalReducer" isOpen={modalReducer.mode} onRequestClose={closeModal} >
                    <button onClick={closeModal} >x</button>
                </Modal>
            </div>
        )
    }
}
const mapDispatchToProps=dispatch=>({
    closeModal:()=>dispatch(closeModal())
})
const mapStateToProps=state=>{
    
    return{
        modalReducer:state.modalReducer
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductModal);