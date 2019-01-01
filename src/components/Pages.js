import React from 'react';
import Pagination from "react-js-pagination";
import { connect } from 'react-redux';
import  { handleChange } from './../actions';

class Pages extends React.Component{

    handleChange=(pageNumber)=>{
        const productsReducer=this.props.productsReducer.products;
        this.props.handleChange({pageNumber,info:productsReducer})
    }    
    render(){
        const {pagesReducer}=this.props;
        return(
            <div>
                <Pagination
                   activePage={pagesReducer.activePage}
                   itemsCountPerPage={2}
                   totalItemsCount={10}
                   pageRangeDisplayed={3}
                   onChange={this.handleChange}
                />                
            </div>
        )
    }
}
const mapDispatchToProps=dispatch=>({
    handleChange:({pageNumber,info})=>dispatch(handleChange({pageNumber,info})),
})
const mapStateToProps=state=>({
    pagesReducer:state.pagesReducer,
    productsReducer:state.productsReducer
})
export default connect(mapStateToProps,mapDispatchToProps)(Pages);
