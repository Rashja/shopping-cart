import React from 'react';
import { connect } from "react-redux";
import { Button, Form, Input,} from 'reactstrap';
import { getValue } from './../actions/index';

class SearchInput extends React.Component{
    state={
        inputText:''
    }
    handleInput=(e)=>{
        this.setState({inputText:e.target.value})
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.getValue(this.state.inputText);
        this.setState({inputText:''})
    }
    render(){
        return(
            <div>
                <Form inline onSubmit={this.handleSubmit} >
                    <Input
                        className="search-inpt" 
                        value={this.state.inputText}
                        placeholder='Search...' 
                        type='text' 
                        onChange={this.handleInput} 
                      />
                    <Button className="search-btn" >Search</Button>
                </Form>
            </div>
        )
    }
}
const mapStateToProps=state=>({
    productsReducer:state.productsReducer
})
const mapDispatchToProps=dispatch=>({
    getValue:(inputValue)=>dispatch(getValue(inputValue))
})
export default connect(mapStateToProps,mapDispatchToProps)(SearchInput);