import React from 'react';

const Items=(props)=>{
    
    return(
        <div>
            <p>this is from item {props.match.params.id}</p>
        </div>
    )
}
export default Items;