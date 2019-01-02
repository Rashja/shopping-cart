import React from 'react';
import SearchInput from "./SearchInput";

const Header=()=>{
    const title='Enjoy Your Shopping';
    return(
        <div>
            <h1 className="header">{title}</h1>
            <SearchInput />
        </div>
    )
}
export default Header;