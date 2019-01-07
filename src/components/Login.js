import React from 'react';
import { connect } from "react-redux";
import { getUserData,getMode } from './../actions/index';
import { Container,Col,Row,Form,FormGroup,Label,Input,Button } from 'reactstrap';

class Login extends React.Component{
    state={
        userText:'',
        passwordText:''
    }
    componentDidMount(){
        if(!this.props.userReducer.userData.length){
        this.props.getUserData()
        }
    }
    handleUser=(e)=>{
        this.setState({userText:e.target.value.trim()})
    }
    handlePassword=(e)=>{
        this.setState({passwordText:e.target.value.trim()})
    }
    handleForm=(e)=>{
        e.preventDefault();
        const {username,password}=this.props.userReducer.userData[0];
        const {userText,passwordText}=this.state;       
        if(username.indexOf(userText) !== -1
             && 
           password.indexOf(passwordText) !== -1      
          )
        {
            this.props.getMode();
            this.props.history.push('/Products');
        }
        return false
    }
    render(){
        return(
            <Container>
                <Row className='justify-content-sm-center' >
                    <Col sm={3} >
                        <Form className='loginForm' onSubmit={this.handleForm} >
                            <FormGroup>
                                <Label for='username' >username</Label>
                                <Input type='text' placeholder='username' onChange={this.handleUser} />
                            </FormGroup>
                            <FormGroup>
                                <Label for='username' >password</Label>
                                <Input type='password' placeholder='password' onChange={this.handlePassword} />
                            </FormGroup>
                            <Button 
                                className='d-block' 
                                color='info' 
                                children={'Log In'}
                                disabled={this.state.userText === '' && this.state.passwordText === ''}
                            />
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}

const mapStateToProps=state=>({
    userReducer:state.userReducer
})
const mapDispatchToProps=dispatch=>({
    getUserData:()=>dispatch(getUserData()),
    getMode:()=>dispatch(getMode())
})
export default connect(mapStateToProps,mapDispatchToProps)(Login);