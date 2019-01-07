import React from 'react';
import { connect } from 'react-redux';
import { logOut } from '../actions/index';
import SearchInput from "./SearchInput";
import { Button } from 'reactstrap';

class  Header extends React.Component{
    render(){
        const title='Enjoy Your Shopping';
        const { logOut }=this.props;
        return(
            <div>
                <Button color='danger' onClick={()=>logOut()} >Log Out</Button>
                <h1 className="header">{title}</h1>
                <SearchInput />
            </div>
        )
    }
}
const mapDispatchToProps=dispatch=>({
    logOut:()=>dispatch(logOut())
})
export default connect(null,mapDispatchToProps)(Header);